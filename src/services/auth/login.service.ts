import { checkEmail } from "../../helpers";
import { User } from "../../models/user.model";
import { APIResponse } from "../../types/interfaces/response.interface";
import { UserLogin } from "../../types/interfaces/user.interface";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { token } from "../../configs/dotenv.config";

export const loginService = async (
  credentials: UserLogin
): Promise<APIResponse> => {
  if (!credentials.email || !credentials.password) {
    return { status: 400, message: "Enter your credentials" };
  }

  const emailTest = checkEmail(credentials.email);

  if (!emailTest) {
    return { status: 400, message: "Invalid email address" };
  }

  const userExists = await User.findOne({ email: credentials.email });

  if (!userExists) {
    return { status: 404, message: "User not found" };
  }

  if (!bcrypt.compareSync(credentials.password, userExists.password)) {
    return { status: 400, message: "Invalid Credentials" };
  }

  const payload = {
    id: userExists.id,
    firse_name: userExists.first_name,
    last_name: userExists.last_name,
    email: userExists.email,
    avatar: userExists.avatar,
  };

  const accessToken = jwt.sign(payload, token.accessToken, { expiresIn: "1h" });
  const refreshToken = jwt.sign(payload, token.refreshToken, {
    expiresIn: "7d",
  });

  return {
    status: 200,
    message: "Logged in Successfully",
    data: { accessToken, refreshToken },
  };
};

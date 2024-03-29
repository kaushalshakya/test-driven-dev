import { checkEmail } from "../../helpers";
import { User } from "../../models/user.model";
import { APIResponse } from "../../types/interfaces/response.interface";
import { UserRegister } from "../../types/interfaces/user.interface";
import bcrypt from "bcrypt";

export const registerService = async (
  userDetails: UserRegister
): Promise<APIResponse> => {
  if (
    !userDetails.confirm_password ||
    !userDetails.email ||
    !userDetails.first_name ||
    !userDetails.last_name ||
    !userDetails.password
  ) {
    return { status: 400, message: "Enter all fields" };
  }

  if (userDetails.password !== userDetails.confirm_password) {
    return {
      status: 400,
      message: "Password and Confirm Password fields do not match",
    };
  }

  const emailCheck = checkEmail(userDetails.email);

  if (!emailCheck) return { status: 400, message: "Invalid Email" };

  const emailExists = await User.findOne({ email: userDetails.email });

  if (emailExists) {
    return { status: 400, message: "Your email already exists in the system" };
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(userDetails.password, salt);

  const user = await User.create({
    first_name: userDetails.first_name,
    middle_name: userDetails.middle_name,
    last_name: userDetails.last_name,
    email: userDetails.email,
    password: hash,
  });

  return { status: 201, message: "User Registered Successfully", data: user };
};

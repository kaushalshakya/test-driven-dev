import { checkEmail } from "../../helpers";
import { APIResponse } from "../../types/interfaces/response.interface";
import { UserLogin } from "../../types/interfaces/user.interface";

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

  return { status: 200, message: "" };
};

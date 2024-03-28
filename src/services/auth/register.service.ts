import { User } from "../../models/user.model";
import {
  APIResponse,
  UserRegister,
} from "../../types/interfaces/user.interface";

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

  const emailExists = await User.findOne({ email: userDetails.email });

  console.log({ emailExists });

  if (emailExists) {
    return { status: 400, message: "Your email already exists in the system" };
  }

  return { status: 201, message: "" };
};

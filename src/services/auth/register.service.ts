import { APIResponse, UserRegister } from "src/types/interfaces/user.interface";

export const registerService = (userDetails: UserRegister): APIResponse => {
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

  return { status: 201, message: "" };
};

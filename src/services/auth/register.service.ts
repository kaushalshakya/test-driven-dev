import { APIResponse, UserRegister } from "src/types/interfaces/user.interface";

export const registerService = (userDetails: UserRegister): APIResponse => {
  if (
    !userDetails.first_name ||
    !userDetails.confirm_password ||
    !userDetails.email ||
    !userDetails.last_name ||
    !userDetails.password
  ) {
    return { status: 400, message: "Enter all fields" };
  }

  if (userDetails.password !== userDetails.confirm_password) {
    return {
      status: 400,
      message: "Passowrd and Confirm Password fields should match",
    };
  }

  return { status: 201, message: "" };
};

import { APIResponse, UserRegister } from "src/types/interfaces/user.interface";

export const registerService = (userDetails: UserRegister): APIResponse => {
  return { status: 201, message: "" };
};

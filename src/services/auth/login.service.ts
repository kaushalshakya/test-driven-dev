import { APIResponse } from "../../types/interfaces/response.interface";
import { UserLogin } from "../../types/interfaces/user.interface";

export const loginService = async (
  credentials: UserLogin
): Promise<APIResponse> => {
  const { email, password } = credentials;

  return { status: 400, message: "" };
};

import { AddPost } from "../../types/interfaces/post.interface";
import { APIResponse } from "../../types/interfaces/response.interface";

export const addPostService = async (
  post: AddPost,
  author: string
): Promise<APIResponse> => {
  return { status: 201, message: "Post created successfully" };
};

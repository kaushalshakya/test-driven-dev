import { AddPost } from "../../types/interfaces/post.interface";
import { APIResponse } from "../../types/interfaces/response.interface";

export const addPostService = async (
  post: AddPost,
  author: string
): Promise<APIResponse> => {
  if (!Object.keys(post).length) {
    return { status: 400, message: "Enter post details" };
  }
  return { status: 201, message: "Post created successfully" };
};

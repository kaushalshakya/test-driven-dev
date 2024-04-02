import { NextFunction, Response } from "express";
import { AuthRequest } from "../types/interfaces/request.interface";
import { addPostService } from "../services/posts";
import { AppError } from "../helpers";

export const addPost = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const response = await addPostService(req.body, req.user.id);

  if (response.status >= 400) {
    return next(new AppError(response.message, response.status));
  }

  return res.status(response.status).json(response);
};

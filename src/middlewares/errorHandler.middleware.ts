import { AppError } from "@helpers/appError.helper";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);

  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    message: err.message,
    error: err,
  });

  next();
};

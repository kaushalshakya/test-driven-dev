import { AppError, catchAsync } from "../helpers/index";
import { NextFunction, Request, Response } from "express";
import { loginService, registerService } from "../services/auth";

export const registerUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const registerUser = await registerService(req.body);

    if (registerUser.status >= 400) {
      return next(new AppError(registerUser.message, registerUser.status));
    }

    return res.status(registerUser.status).json(registerUser);
  }
);

export const loginUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const loginUser = await loginService(req.body);

    if (loginUser.status >= 400) {
      return next(new AppError(loginUser.message, loginUser.status));
    }

    return res.status(loginUser.status).json(loginUser);
  }
);

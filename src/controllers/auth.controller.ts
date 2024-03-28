import { AppError, catchAsync } from "../helpers/index";
import { NextFunction, Request, Response } from "express";
import { registerService } from "../services/auth/register.service";

export const registerUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const registerUser = await registerService(req.body);

    if (registerUser.status >= 400) {
      return next(new AppError(registerUser.message, registerUser.status));
    }

    return res.status(200).json(registerUser);
  }
);

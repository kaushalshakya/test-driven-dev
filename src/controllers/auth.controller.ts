import { catchAsync } from "@helpers/catchAsync.helper";
import { NextFunction, Request, Response } from "express";
import { registerService } from "src/services/register.service";

export const registerUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const registerUser = await registerService(req.body);
  }
);

import { NextFunction, Response } from "express";
import { AuthRequest } from "../types/interfaces/request.interface";
import { AppError } from "../helpers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { authenticate } from "../configs/dotenv.config";
import { JWTUser } from "../types/interfaces/jwt.interface";

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return next(new AppError("You need to login to access this resource", 401));
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, authenticate.accessToken, (err, decoded: JwtPayload) => {
    if (err) {
      return next(new AppError("Token hampered or expired", 401));
    }

    req.user = decoded as JWTUser;
    console.log(req.user);
    next();
  });
};

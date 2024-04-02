import { Request } from "express";
import { JWTUser } from "./jwt.interface";

export interface AuthRequest extends Request {
  user: JWTUser;
}

import { JwtPayload } from "jsonwebtoken";

export interface JWTUser extends JwtPayload {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

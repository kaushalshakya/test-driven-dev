import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const db = process.env.DB_URI;
export const authenticate: { accessToken: string; refreshToken: string } = {
  accessToken: process.env.ACCESS_TOKEN_SECRET,
  refreshToken: process.env.REFRESH_TOKEN_SECRET,
};

import { registerUser } from "@controllers/auth.controller";
import { Router } from "express";

export const router = Router();

router.post("/", registerUser);

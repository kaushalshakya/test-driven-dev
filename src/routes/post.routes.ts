import { Router } from "express";
import { addPost } from "../controllers/post.controller";
import { auth } from "../middlewares/auth.middleware";

const router = Router();
router.post("/", auth, addPost);

export default router;

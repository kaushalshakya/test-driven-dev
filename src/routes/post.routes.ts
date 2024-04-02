import { Router } from "express";
import { addPost } from "../controllers/post.controller";

const router = Router();
router.post("/", addPost);

export default router;

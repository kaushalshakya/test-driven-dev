import express from "express";
import mongoose from "mongoose";
import { db, port } from "./src/configs/dotenv.config";
import { AuthRoutes, PostRoutes } from "./src/routes";
import { errorHandler } from "./src/middlewares/errorHandler.middleware";
import { auth } from "./src/middlewares/auth.middleware";

const app = express();

app.use(express.json());

mongoose
  .connect(db)
  .then(() => console.log("👍️ DB Connected"))
  .catch((err) => console.log(err.message));

app.get("/", auth, (req, res) => {
  return res.status(200).json({ message: "Hello from AWS Instance" });
});

app.use("/api/auth", AuthRoutes);
app.use("/api/posts", PostRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`👍️ Server running on: http://localhost:${port}`);
  });
}

app.use(errorHandler);

export { app };

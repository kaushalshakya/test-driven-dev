import express from "express";
import mongoose from "mongoose";
import { db, port } from "./src/configs/dotenv.config";
import { AuthRoutes } from "./src/routes";
import { errorHandler } from "./src/middlewares/errorHandler.middleware";

const app = express();

app.use(express.json());

mongoose
  .connect(db)
  .then(() => console.log("👍️ DB Connected"))
  .catch((err) => console.log(err.message));

app.use("/api/auth", AuthRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`👍️ Server running on: http://localhost:${port}`);
  });
}

app.use(errorHandler);

export { app };

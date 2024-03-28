import express from "express";
import mongoose from "mongoose";
import { db, port } from "./src/configs/dotenv.config";

const app = express();

app.use(express.json());

mongoose
  .connect(db)
  .then(() => console.log("👍️ DB Connected"))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`👍️ Server running on: http://localhost:${port}`);
});

export { app };

import mongoose from "mongoose";
import supertest from "supertest";
import { app } from "../../../server";

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Add Posts", () => {
  describe("POST /api/posts", () => {
    test("should return 401 when unauthorized", async () => {
      const postData = {
        image: "fakeImage.jpg",
        caption: "This is a test data",
      };
      const response = await supertest(app).post("/api/posts").send(postData);
      expect(response.status).toBe(401);
    });
  });
});

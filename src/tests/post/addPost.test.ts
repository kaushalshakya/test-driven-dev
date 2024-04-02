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

    test("should return 201 when post is created", async () => {
      const postData = {
        caption: "This is a test data",
      };
      const response = await supertest(app)
        .post("/api/posts")
        .set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDU1YjM1ZjNiMDdkM2RlY2FiNTQ3YyIsImZpcnN0X25hbWUiOiJUZXN0IiwibGFzdF9uYW1lIjoiVXNlciIsImVtYWlsIjoidGVzdC51c2VyQGplc3QuY29tIiwiaWF0IjoxNzEyMDQ5MDc3LCJleHAiOjE3MTIwNTI2Nzd9.Nn6cnhqPsweP5adReuz8gDOh5klbgOHOjrgnajpOhWM"
        )
        .send(postData);

      expect(response.status).toBe(201);
    });
  });
});

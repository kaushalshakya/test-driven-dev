import mongoose from "mongoose";

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Add Posts", () => {
  describe("POST /api/posts", () => {
    test("should return 401 when unauthorized");
  });
});

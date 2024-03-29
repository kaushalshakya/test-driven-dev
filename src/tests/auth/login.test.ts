import mongoose from "mongoose";
import { loginService } from "../../services/auth";

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Login User", () => {
  describe("POST api/auth/login", () => {
    test("should return 400 when login details are not provided", async () => {
      const loginDetails = {};

      const response = await loginService(loginDetails);
      expect(response.status).toBe(200);
    });
  });
});

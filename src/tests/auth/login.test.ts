import mongoose from "mongoose";
import { loginService } from "../../services/auth";
import { app } from "../../../server";
import supertest from "supertest";

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Login User", () => {
  describe("POST api/auth/login", () => {
    test("should return 400 when login details are not provided", async () => {
      const loginDetails = {};

      const response = await loginService(loginDetails);
      expect(response.status).toBe(400);
    });

    test("should return 400 when email is invalid", async () => {
      const loginDetails = {
        email: "test123",
        password: "asdaw",
      };

      const response = await loginService(loginDetails);
      expect(response.status).toBe(400);
    });

    test("successful login", async () => {
      const loginDetails = {
        email: "test.user@jest.com",
        password: "test123",
      };

      const response = await loginService(loginDetails);
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("accessToken");
      expect(response.data).toHaveProperty("refreshToken");
    });

    test("invalid user", async () => {
      const loginDetails = {
        email: "estasdasdad@gmail.com",
        password: "asdqwe123",
      };

      const response = await supertest(app)
        .post("/api/auth/login")
        .send(loginDetails);

      expect(response.status).toBe(404);
    });

    test("invalid credentials", async () => {
      const loginDetails = {
        email: "test.user@jest.com",
        password: "asdqwe123",
      };

      const response = await supertest(app)
        .post("/api/auth/login")
        .send(loginDetails);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Invalid Credentials");
    });
  });
});

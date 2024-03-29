import { registerService } from "../../services/auth/register.service";
import supertest from "supertest";
import { app } from "../../../server";

describe("Register", () => {
  describe("POST /api/auth/register", () => {
    test("should return 201 on successful registration", () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test+1.user@jest.com",
        password: "test123",
        confirm_password: "test123",
      };
      registerService(registerData).then((resp) =>
        expect(resp.status).toBe(201)
      );
    });

    test("should return 400 when first_name is not provided", () => {
      const registerData = {
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        password: "test123",
        confirm_password: "123test",
      };

      registerService(registerData).then((response) => {
        expect(response.status).toBe(400);
      });
    });

    test("should return 400 when confirm_password is not provided", () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        password: "test123",
      };
      registerService(registerData).then((response) => {
        expect(response.status).toBe(400);
      });
    });

    test("should return 400 when password and confirm_passowrd is not equal", () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        password: "test123",
        confirm_password: "asdet",
      };
      registerService(registerData).then((response) => {
        expect(response.status).toBe(400);
      });
    });

    test("should return 400 when last_name is not provided", () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        email: "test.user@jest.com",
        password: "test123",
        confirm_password: "123test",
      };
      registerService(registerData).then((response) => {
        expect(response.status).toBe(400);
      });
    });

    test("should return 400 when email is not provided", () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        password: "test123",
        confirm_password: "123test",
      };
      registerService(registerData).then((response) => {
        expect(response.status).toBe(400);
      });
    });

    test("should return 400 when password is not provided", () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        confirm_password: "123test",
      };
      registerService(registerData).then((response) => {
        expect(response.status).toBe(400);
      });
    });

    test("should return 400 when email already exists in the database", async () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        password: "test123",
        confirm_password: "test123",
      };

      const response = await supertest(app)
        .post("/api/auth/register")
        .send(registerData);

      expect(response.status).toBe(400);
    });

    test("should return 400 when empty string is provided", () => {
      const registerData = {
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        confirm_password: "",
        password: "",
      };
      registerService(registerData).then((response) => {
        expect(response.status).toBe(400);
      });
    });

    test("should return 400 when invalid email address is provided", async () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "testuser",
        confirm_password: "password",
        password: "password",
      };
      const response = await registerService(registerData);

      expect(response.status).toBe(400);
    });
  });
});

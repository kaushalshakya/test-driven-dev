import { registerService } from "../../services/auth/register.service";

describe("Register", () => {
  describe("POST /api/auth/register", () => {
    test("should return 201 on successful registration", async () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        password: "test123",
        confirm_password: "test123",
      };

      expect(registerService(registerData).status).toBe(201);
    });
    test("should return 400 when first_name is not provided", async () => {
      const registerData = {
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        password: "test123",
        confirm_password: "123test",
      };
      expect(registerService(registerData).status).toBe(400);
    });

    test("should return 400 when confirm_password is not provided", async () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        password: "test123",
      };

      expect(registerService(registerData).status).toBe(400);
    });
    test("should return 400 when password and confirm_passowrd is not equal", async () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        password: "test123",
        confirm_password: "asdet",
      };

      expect(registerService(registerData).status).toBe(400);
    });
    test("should return 400 when last_name is not provided", async () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        email: "test.user@jest.com",
        password: "test123",
        confirm_password: "123test",
      };

      expect(registerService(registerData).status).toBe(400);
    });
    test("should return 400 when email is not provided", async () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        password: "test123",
        confirm_password: "123test",
      };

      expect(registerService(registerData).status).toBe(400);
    });
    test("should return 400 when password is not provided", async () => {
      const registerData = {
        first_name: "Test",
        middle_name: "Bahadur",
        last_name: "User",
        email: "test.user@jest.com",
        confirm_password: "123test",
      };

      expect(registerService(registerData).status).toBe(400);
    });
  });
});

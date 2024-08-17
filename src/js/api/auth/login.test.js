import { login } from "./login";
import { apiPath } from "../constants";

//to test if the login function stores a token when provided with valid credentials
describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      clear: jest.fn(),
    };

    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should store the token and profile when provided with valid credentials", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        accessToken: "test_token",
        username: "test_user",
      }),
    };

    global.fetch.mockResolvedValue(mockResponse);

    await login("test@example.com", "password123");

    expect(global.fetch).toHaveBeenCalledWith(
      `${apiPath}/social/auth/login`,
      expect.any(Object)
    );

    expect(global.localStorage.setItem).toHaveBeenCalledWith(
      "token",
      '"test_token"'
    );
    expect(global.localStorage.setItem).toHaveBeenCalledWith(
      "profile",
      '{"username":"test_user"}'
    );
  });

  it("should throw an error when login fails", async () => {
    const mockResponse = {
      ok: false,
      statusText: "Unauthorized",
    };

    global.fetch.mockResolvedValue(mockResponse);

    await expect(login("test@example.com", "wrongpassword")).rejects.toThrow(
      "Unauthorized"
    );

    expect(global.localStorage.setItem).not.toHaveBeenCalled();
  });
});

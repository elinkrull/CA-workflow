// logout.test.js
import { remove } from "../../storage/index.js";
import { logout } from "./logout";

// Mock the remove function
jest("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  beforeEach(() => {
    jest.clearAll();
  });

  it("should call remove with 'token' and 'profile'", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
  });
});

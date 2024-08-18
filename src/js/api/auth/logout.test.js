import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

//Using mock because of local storage
jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  it("should remove the token from local storage when logout button is clicked on", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});

WORKFLOW

* Project is configured to run Prettier on commit

* Project is configured to run ESLint on commit

* The login function stores a token when provided with valid credentials

* The logout function clears the token from browser storage

* The user can log in with the login form with valid credentials

* The user cannot submit the login form with invalid credentials and is shown a message.

* The user can log out with the logout button


UNIT TESTING NOTES

//Import the function

//Setup a test

//Make assertions

//Is this good enough?
// - What happens if we supply bad arguments?
// - What should happen?


login.test.js

// import { login } from "./login";
// import { save } from "../../storage";

// describe("login", () => {
//   it("stores the token and login when login form is provided with valid credentials", async () => {
//     expect(response.ok);
//   });
// });

// it("throws an error if credentials is not valid");

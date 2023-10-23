import { checkForName } from "../src/client/js/nameChecker";

describe("Test checkForName is exist", () => {
  test("Test function checkForName is true", () => {
    expect(checkForName).toBeDefined();
  });
});

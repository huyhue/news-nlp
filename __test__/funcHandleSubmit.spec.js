import { handleSubmit } from "../src/client/js/formHandler";

describe("Test handleSubmit is exist", () => {
  test("handleSubmit is true", () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe("Test handleSubmit is function", () => {
  test("handleSubmit is function", () => {
    expect(typeof handleSubmit).toBe("function");
  });
});

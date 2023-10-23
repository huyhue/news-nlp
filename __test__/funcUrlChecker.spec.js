// Import the js file to test
import { validUrl } from "../src/client/js/urlChecker";

describe("Test validUrl exist ", () => {
  test("Test validUrl", () => {
    expect(validUrl).toBeDefined();
  });
});

describe("Test validUrl is function", () => {
  test("function", () => {
    expect(typeof validUrl).toBe("function");
  });
});

describe("Test invalid Url", () => {
  var url = "okhttps://learn.udacity.com/";
  test("response is false", async () => {
    const res = validUrl(url);
    expect(res).toBeDefined();
    expect(res).toBe(0);
  });
});

describe("Test valid Url", () => {
  var url = "https://learn.udacity.com/";
  test("response is true", async () => {
    const res = validUrl(url);
    expect(res).toBeDefined();
    expect(res).toBe(1);
  });
});

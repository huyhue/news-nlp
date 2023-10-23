const request = require("supertest");
const app = require("../src/server/index");

describe("Check root API", () => {
  test("GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe('Test path "/test"', () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(200);
    expect(response.body.time).toBe("now");
  });
});

describe('Test path POST "/api"', () => {
  test("It should response the POST method", async () => {
    const service = {
      url: "https://stackoverflow.com/questions/54315266/jest-how-to-test-express-api-post-request",
    };
    const response = await request(app).post("/api").send(service);
    expect(response.statusCode).toBe(200);
  });
});

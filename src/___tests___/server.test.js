/**
 * @jest-environment node
 */

const request = require("supertest");
const { app, server } = require("../server");

jest.mock();

afterAll(async () => server.close(), 1000);

it("GET /test", async () => {
  const response = await request(app).get("/test");
  expect(response.status).toEqual(200);
  expect(response.text).toEqual("<h1>I'm sent from the NodeJs server.</h1>");
});

import { describe, test } from "@jest/globals";
import request from "supertest";
import { app } from "../../app";

// Test get missions route
describe("Test GET /missions", () => {
  test("It should respond with 200 success", async () => {
    await request(app)
      .get("/missions")
      .expect("Content-Type", /json/)
      .expect(200);
    // expect(response.statusCode).toBe(200);
  });
});

// Test create mission route
describe("Test POST /missions", () => {
  test("It should respond with 201 created", async () => {
    await request(app)
      .post("/missions")
      .send({
        startDate: new Date("2026-07-01"),
        endDate: new Date("2026-07-10"),
        name: "Explorer IS1",
        rocket: "falcon-9",
        target: "Kepler-452 b",
        type: "research",
        customers: ["ESA", "NASA"],
        isAborted: false,
      })
      .expect("Content-Type", /json/)
      .expect(201);

    // expect(response.statusCode).toBe(201);
  });

  test("It should catch invalid mission data", async () => {
    await request(app)
      .post("/missions")
      .send({
        startDate: "2026-07-01",
        endDate: "2026-07-10",
        name: "AB",
        rocket: "invalid-rocket",
        target: "Kepler-452 b",
        type: "research",
        customers: ["NASA"],
        isAborted: false,
      })
      .expect("Content-Type", /json/)
      .expect(400);
  });
});

// Test abort mission route
describe("Test PATCH /missions", () => {
  test("It should respond with 200 aborted", async () => {
    await request(app)
      .patch("/missions/1/abort")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("It should respond with 400 whe mission does not exist", async () => {
    await request(app)
      .patch("/missions/999999/abort")
      .expect("Content-Type", /json/)
      .expect(400);
  });

  //   expect(response.statusCode).toBe(200);
});

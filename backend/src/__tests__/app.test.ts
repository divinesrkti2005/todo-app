import request from "supertest";

import app from "../../src/";

describe("Test '/'", () => {
  test("Catch Get all todo route", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
describe("Test '/new'", () => {
  test("Create new Todo", async () => {
    const res = await request(app)
      .post("/new")
      .send({ value: "Testing Todo Using unit test" });
    expect(res.status).toBe(200);
  });
});
describe("Test app.ts", () => {
  test("update the test todo with test - updated", async () => {
    const testTodo = await request(app).get("/");
    const testTodoId = testTodo.body.filter(
      (d) => d.title === "Testing Todo Using unit test"
    )[0].id;

    const res = await request(app).patch("/update").send({
      id: testTodoId,
      title: "Testing Todo Using unit test - updated",
    });
    expect(res.status).toBe(200);
  });
});

describe("Test app.ts", () => {
  test("Delete existing test todo", async () => {
    const testTodo = await request(app).get("/");
    const testTodoId = testTodo.body.filter(
      (d) => d.title === "Testing Todo Using unit test - updated"
    )[0].id;

    const res = await request(app).delete("/delete").send({ id: testTodoId });
    expect(res.status).toBe(200);
  });
});

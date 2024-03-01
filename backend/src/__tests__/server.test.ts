describe("Database connection test", () => {
  test("Connection Test", async () => {
    const db = await import("../../src/db/index");
    expect(db).toBeTruthy();
  });
});

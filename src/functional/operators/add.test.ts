import { describe, it } from "node:test";
import assert from "node:assert";
import add from "./add.js";

void describe("Add", () => {
  void it("Should add two numbers", () => {
    assert.equal(add(5, 10), 15);
  });

  void it("Should add two strings", () => {
    assert.equal(add("Hello, ", "World!"), "Hello, World!");
  });
});

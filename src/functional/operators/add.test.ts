import { describe, it } from "node:test";
import assert from "node:assert";
import Add from "./add.js";

void describe("Add", () => {
  void it("Should add two numbers", () => {
    assert.equal(Add(5, 10), 15);
  });

  void it("Should add two strings", () => {
    assert.equal(Add("Hello, ", "World!"), "Hello, World!");
  });
});

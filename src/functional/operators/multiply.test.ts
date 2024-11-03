import { describe, it } from "node:test";
import assert from "node:assert";
import multiply from "./multiply.js";

void describe("Multiply", () => {
  void it("Should multiply two numbers", () => {
    assert.equal(multiply(5, 10), 50);
  });
});

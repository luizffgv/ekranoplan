import { describe, it } from "node:test";
import assert from "node:assert";
import Multiply from "./multiply.js";

void describe("Multiply", () => {
  void it("Should multiply two numbers", () => {
    assert.equal(Multiply(5, 10), 50);
  });
});

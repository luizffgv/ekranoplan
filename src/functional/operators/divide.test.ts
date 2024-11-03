import { describe, it } from "node:test";
import assert from "node:assert";
import divide from "./divide.js";

void describe("Divide", () => {
  void it("Should divide two numbers", () => {
    assert.equal(divide(5, 10), 0.5);
  });
});

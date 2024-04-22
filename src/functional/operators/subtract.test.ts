import { describe, it } from "node:test";
import assert from "node:assert";
import Subtract from "./subtract.js";

void describe("Subtract", () => {
  void it("Should subtract two numbers", () => {
    assert.equal(Subtract(5, 10), -5);
  });
});

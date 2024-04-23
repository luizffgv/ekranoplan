import { describe, it } from "node:test";
import assert from "node:assert";
import subtract from "./subtract.js";

void describe("Subtract", () => {
  void it("Should subtract two numbers", () => {
    assert.equal(subtract(5, 10), -5);
  });
});

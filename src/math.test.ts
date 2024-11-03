import { describe, it } from "node:test";
import assert from "node:assert";
import { lerp } from "./math.js";

void describe("lerp", () => {
  void it("Should return the start value when where = 0", () => {
    assert.equal(lerp(10, 20, 0), 10);
    assert.equal(lerp(15, -20, 0), 15);
    assert.equal(lerp(-12, 20, 0), -12);
    assert.equal(lerp(-14, -20, 0), -14);
  });

  void it("Should return the end value when where = 1", () => {
    assert.equal(lerp(20, 10, 1), 10);
    assert.equal(lerp(-20, 15, 1), 15);
    assert.equal(lerp(20, -12, 1), -12);
    assert.equal(lerp(-20, -14, 1), -14);
  });

  void it("Should return the midpoint value when where = 0.5", () => {
    assert.equal(lerp(10, 20, 0.5), 15);
    assert.equal(lerp(15, -20, 0.5), -2.5);
    assert.equal(lerp(-12, 20, 0.5), 4);
    assert.equal(lerp(-14, -20, 0.5), -17);
  });
});

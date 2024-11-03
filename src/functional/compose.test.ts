import { describe, it } from "node:test";
import assert from "node:assert";
import compose from "./compose.js";

/**
 * Returns the double of a number.
 * @param x The number to double.
 * @returns The double of {@link x}.
 */
function double(x: number): number {
  return x * 2;
}

void describe("Compose", () => {
  void it("Should work with one function", () => {
    assert.strictEqual(compose(double)(5), 10);
  });

  void it("Should compose two or more functions", () => {
    assert.strictEqual(compose(double, String)(5), "10");

    assert.strictEqual(
      compose(double, String, Number.parseInt, double, String)(0.75),
      "2",
    );
  });
});

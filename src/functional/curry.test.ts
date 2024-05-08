import { describe, it } from "node:test";
import assert from "node:assert";
import curry from "./curry.js";

/**
 * Subtracts to numbers.
 * @param x - Left-hand side operand.
 * @param y - Right-hand side operand.
 * @returns Subtraction of {@link y} from {@link x}.
 */
function sub(x: number, y: number): number {
  return x - y;
}

/**
 * Concatenates strings.
 * @param args - Strings to concatenate.
 * @returns Concatenated strings.
 */
function concat(...args: string[]): string {
  return args.join("");
}

void describe("Curry", () => {
  void it("Should curry a function with 2 arguments", () => {
    assert.strictEqual(curry(sub, 2)(5)(10), -5);
    assert.strictEqual(curry(concat, 2)("he")("llo"), "hello");
  });

  void it("Should curry a function with N > 2 arguments", () => {
    assert.strictEqual(curry(concat, 3)("he")("ll")("o"), "hello");
    assert.strictEqual(curry(concat, 4)("he")("l")("l")("o"), "hello");
    assert.strictEqual(curry(concat, 5)("h")("e")("l")("l")("o"), "hello");
  });

  void it("Should curry a function with variadic arguments", () => {
    assert.strictEqual(curry(concat, 1)("h", "ell", "o"), "hello");
    assert.strictEqual(curry(concat, 2)("h")("ell", "o"), "hello");
    assert.strictEqual(curry(concat, 3)("h")("e")("ll", "o"), "hello");
  });
});

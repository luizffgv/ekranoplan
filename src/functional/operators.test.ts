import { describe, it } from "node:test";
import assert from "node:assert";
import * as operators from "./operators.js";

void describe("Operator symbols", () => {
  void it('Maps "+" to Add', () => {
    assert.equal(operators.tokens["+"], operators.add);
  });

  void it('Maps "/" to Divide', () => {
    assert.equal(operators.tokens["/"], operators.divide);
  });

  void it('Maps "*" to Multiply', () => {
    assert.equal(operators.tokens["*"], operators.multiply);
  });

  void it('Maps "-" to Subtract', () => {
    assert.equal(operators.tokens["-"], operators.subtract);
  });
});

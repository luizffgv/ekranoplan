import { describe, it } from "node:test";
import assert from "node:assert";
import * as operators from "./operators.js";

void describe("Operator symbols", () => {
  void it('Maps "+" to Add', () => {
    assert.equal(operators.tokens["+"], operators.Add);
  });

  void it('Maps "/" to Divide', () => {
    assert.equal(operators.tokens["/"], operators.Divide);
  });

  void it('Maps "*" to Multiply', () => {
    assert.equal(operators.tokens["*"], operators.Multiply);
  });

  void it('Maps "-" to Subtract', () => {
    assert.equal(operators.tokens["-"], operators.Subtract);
  });
});

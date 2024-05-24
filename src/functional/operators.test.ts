import { describe, it } from "node:test";
import assert from "node:assert";
import * as operators from "./operators.js";
import add from "./operators/add.js";
import divide from "./operators/divide.js";
import multiply from "./operators/multiply.js";
import subtract from "./operators/subtract.js";

void describe("Operator symbols", () => {
  void it('Maps "+" to Add', () => {
    assert.equal(operators.tokens["+"], add);
  });

  void it('Maps "/" to Divide', () => {
    assert.equal(operators.tokens["/"], divide);
  });

  void it('Maps "*" to Multiply', () => {
    assert.equal(operators.tokens["*"], multiply);
  });

  void it('Maps "-" to Subtract', () => {
    assert.equal(operators.tokens["-"], subtract);
  });
});

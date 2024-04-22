import { describe, it } from "node:test";
import assert from "node:assert";
import * as operators from "./operators.js";

void describe("Operator symbols", () => {
  void it('Maps "+" to Add', () => {
    assert.equal(operators.tokens["+"], operators.Add);
  });
});

import { describe, it } from "node:test";
import assert from "node:assert";
import not from "./not.js";

void describe("Not", () => {
  void it("Should negate a non-function value", () => {
    assert.equal(not(true), false);
    assert.equal(not(false), true);
    assert.equal(not({}), false);
    assert.equal(not("wowzers"), false);
    assert.equal(not(""), true);
    assert.equal(not(not("wowzers")), true);
  });

  void it("Should produce a negated function given a function", () => {
    assert.equal(not(() => true)(), false);
    assert.equal(not(() => false)(), true);
    assert.equal(not(() => ({}))(), false);
    assert.equal(not(() => "wowzers")(), false);
    assert.equal(not(() => "")(), true);
    assert.equal(not(not(() => "wowzers"))(), true);
  });
});

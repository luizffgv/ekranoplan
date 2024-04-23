import { describe, it } from "node:test";
import identity from "./identity.js";
import assert from "node:assert";

void describe("Identity", () => {
  void it("Should return the value passed in as-is", () => {
    assert.equal(identity(10), 10);
    assert.equal(identity("wow"), "wow");
    {
      const o = {};
      assert.equal(identity(o), o);
    }
    {
      const a: [] = [];
      assert.equal(identity(a), a);
    }
    {
      const f = (): void => {};
      assert.equal(identity(f), f);
    }
  });
});

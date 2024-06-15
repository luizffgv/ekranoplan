import { describe, it } from "node:test";
import assert from "node:assert";
import identity from "./identity.js";

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

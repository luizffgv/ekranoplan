import { describe, it } from "node:test";
import assert from "node:assert";
import { throwIfNull } from "./conversions.js";

void describe("Conversions", () => {
  void describe("throwIfNull", () => {
    void it("Throws if value is nullish", () => {
      assert.throws(() => throwIfNull(null));
      assert.throws(() => throwIfNull(undefined));
    });

    void it("Does not throw if value is not nullish", () => {
      assert.doesNotThrow(() => throwIfNull(0));
      assert.doesNotThrow(() => throwIfNull("ekranoplan"));
    });

    void it("Throws with the default message", () => {
      assert.throws(() => throwIfNull(null), {
        message: "throwIfNull received a nullish value.",
      });
    });

    void it("Throws with the provided message", () => {
      assert.throws(() => throwIfNull(null, "foo"), {
        message: "foo",
      });
    });
  });
});

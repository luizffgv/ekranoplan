/* eslint-disable @typescript-eslint/no-extraneous-class */
import { describe, it } from "node:test";
import { throwIfNull, trySpecify } from "./conversions.js";
import assert from "node:assert";

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

  void describe("trySpecify", () => {
    class A {}
    class A1 extends A {}
    class B {}

    void it("Does not throw if the value is an instance of the specified class", () => {
      assert.doesNotThrow(() => trySpecify(new A(), A));
      assert.doesNotThrow(() => trySpecify(new A1(), A));
      assert.doesNotThrow(() => trySpecify(new A1(), A1));
      assert.doesNotThrow(() => trySpecify(new B(), B));
    });

    void it("Throws if the value is not an instance of the specified class", () => {
      assert.throws(() => trySpecify(new A(), A1));
      assert.throws(() => trySpecify(new A(), B));
      assert.throws(() => trySpecify(new B(), A));
    });

    void it("Forwards the value in its return", () => {
      const value = new A1();

      const returned = trySpecify(value, A);

      assert.strictEqual(returned, value);
    });

    void it("Throws with the provided message", () => {
      assert.throws(() => trySpecify(new B(), A, "foo"), {
        message: "foo",
      });
    });
  });
});

/**
 * @file This file has compile-time tests for the predicates module.
 */

// We disable the rule here because here we test some type system tomfoolery
/* eslint-disable @typescript-eslint/no-explicit-any */

import { describe, it } from "node:test";
import { And, Equals, IsTruthy, Not, Or } from "./predicates.js";
import assert from "node:assert";

void describe("Predicates", () => {
  void describe("And", () => {
    void it("Should be true if all booleans are true", () => {
      {
        const c: Equals<true, And<[true]>> = true;
        assert.equal(c, true);
      }
      {
        const c2: Equals<true, And<[true, true, true]>> = true;
        assert.equal(c2, true);
      }
    });

    void it("Should be boolean if at least one boolean is boolean and there is no false", () => {
      {
        const c: Equals<boolean, And<[boolean]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, And<[true, boolean]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, And<[boolean, true]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, And<[boolean, boolean]>> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be false if at least one boolean is false", () => {
      {
        const c: Equals<false, And<[false]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, And<[false, false, false]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, And<[true, false]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, And<[false, boolean]>> = true;
        assert.equal(c, true);
      }
    });
  });

  void describe("Or", () => {
    void it("Should be true if at least one boolean is true", () => {
      {
        const c: Equals<true, Or<[true]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<true, Or<[boolean, true]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<true, Or<[false, true]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<true, Or<[true, false, boolean]>> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be boolean if there is no true", () => {
      {
        const c: Equals<boolean, Or<[boolean]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, Or<[false, boolean]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, Or<[boolean, false]>> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be false if all booleans are false", () => {
      {
        const c: Equals<false, Or<[false]>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, Or<[false, false]>> = true;
        assert.equal(c, true);
      }
    });
  });

  void describe("Equals", () => {
    void it("Should be true if types are equal", () => {
      {
        const c: Equals<true, true> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<number, number> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<{ a: number }, { a: number }> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<unknown, unknown> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be false if types are not equal", () => {
      {
        const c: Equals<true, false> = false;
        assert.equal(c, false);
      }
      {
        const c: Equals<number, string> = false;
        assert.equal(c, false);
      }
      {
        const c: Equals<{ a: number }, { a: string }> = false;
        assert.equal(c, false);
      }
    });

    void it("Should be true if either type is any", () => {
      {
        const c: Equals<any, string> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<number, any> = true;
        assert.equal(c, true);
      }
    });
  });

  void describe("IsTruthy", () => {
    void it("Should work correctly for simple booleans", () => {
      {
        const c: Equals<true, IsTruthy<true>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, IsTruthy<false>> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be false for always falsy types", () => {
      {
        const c: Equals<false, IsTruthy<false>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, IsTruthy<null>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, IsTruthy<undefined>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, IsTruthy<0>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<false, IsTruthy<"">> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be boolean for arguments that may or may not be true/false", () => {
      {
        const c: Equals<boolean, IsTruthy<boolean>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, IsTruthy<object>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, IsTruthy<number>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, IsTruthy<string>> = true;
        assert.equal(c, true);
      }
    });
  });

  void describe("Not", () => {
    void it("Should negate simple booleans", () => {
      {
        const c: Equals<false, Not<true>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<true, Not<false>> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be true for always falsy types", () => {
      {
        const c: Equals<true, Not<false>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<true, Not<null>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<true, Not<undefined>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<true, Not<0>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<true, Not<"">> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be boolean for arguments that may or may not be true/false", () => {
      {
        const c: Equals<boolean, Not<boolean>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, Not<object>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, Not<number>> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<boolean, Not<string>> = true;
        assert.equal(c, true);
      }
    });
  });
});

/**
 * @file This file has compile-time tests for the predicates module.
 */

// We disable the rule here because here we test some type system tomfoolery
/* eslint-disable @typescript-eslint/no-explicit-any */

import { describe, it } from "node:test";
import { And, Equals, Or } from "./predicates.js";
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
});

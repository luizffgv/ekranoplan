/**
 * @file This file has compile-time tests for the tuple module.
 */

import { ConcatTuple, TrimTuple } from "./tuple.js";
import { describe, it } from "node:test";
import { Equals } from "./predicates.js";
import assert from "node:assert";

void describe("Tuple", () => {
  void describe("ConcatTuple", () => {
    void it("Should concatenate two tuples", () => {
      {
        const c: Equals<ConcatTuple<[1, 2], [3, 4]>, [1, 2, 3, 4]> = true;
        assert.equal(c, true);
      }
    });

    void it("Should work with empty tuples", () => {
      {
        const c: Equals<ConcatTuple<[], [3, 4]>, [3, 4]> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<ConcatTuple<[1, 2], []>, [1, 2]> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<ConcatTuple<[], []>, []> = true;
        assert.equal(c, true);
      }
    });

    void it("Should work with arrays", () => {
      {
        const c: Equals<
          ConcatTuple<number[], [string]>,
          [...number[], string]
        > = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<
          ConcatTuple<[string], number[]>,
          [string, ...number[]]
        > = true;
        assert.equal(c, true);
      }
    });
  });

  void describe("TrimTuple", () => {
    void it("Should remove the first element", () => {
      {
        const c: Equals<TrimTuple<[1, 2, 3, 4], "first">, [2, 3, 4]> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<TrimTuple<[1], "first">, []> = true;
        assert.equal(c, true);
      }
    });

    void it("Should remove the last element", () => {
      {
        const c: Equals<TrimTuple<[1, 2, 3, 4], "last">, [1, 2, 3]> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<TrimTuple<[1], "last">, []> = true;
        assert.equal(c, true);
      }
    });

    void it("Should be empty if the tuple is already empty", () => {
      {
        const c: Equals<TrimTuple<[], "first">, []> = true;
        assert.equal(c, true);
      }
      {
        const c: Equals<TrimTuple<[], "last">, []> = true;
        assert.equal(c, true);
      }
    });
  });
});

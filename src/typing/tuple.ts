/**
 * Provides type system utilities related to tuple types.
 * @module
 */

/** Any tuple type, including arrays. */
export type Tuple = [...unknown[]];

/**
 * Concatenates two tuples.
 * @template L - First tuple.
 * @template R - Second tuple.
 * @example
 * ```ts
 * // A: [1, 2, 3, 4]
 * type A = ConcatTuple<[1, 2], [3, 4]>;
 * // B: [string, ...number[]]
 * type B = ConcatTuple<[string], number[]>;
 * // C: [string, number]
 * type C = ConcatTuple<[], [string, number]>;
 * ```
 */
export type ConcatTuple<L extends Tuple, R extends Tuple> = [...L, ...R];

type TrimTupleFirst<L extends Tuple> = L extends [unknown, ...infer Rest]
  ? Rest
  : L;

type TrimTupleLast<L extends Tuple> = L extends [...infer Rest, unknown]
  ? Rest
  : L;

/**
 * Removes the first or the last element from a tuple.
 * @template L - Tuple to remove an element from.
 * @template M - Whether to remove the first or the last element.
 * @example
 * ```ts
 * // A: [2, 3]
 * type A = TrimTuple<[1, 2, 3], "first">;
 * // B: [1, 2]
 * type B = TrimTuple<[1, 2, 3], "last">;
 * // C: []
 * type C = TrimTuple<[], "last">;
 * ```
 */
export type TrimTuple<
  T extends Tuple,
  M extends "first" | "last",
> = M extends "first" ? TrimTupleFirst<T> : TrimTupleLast<T>;

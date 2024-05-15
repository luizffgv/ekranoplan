import { ToNumeric, ToPrimitive } from "./typing/ecma.js";
export * as ecma from "./typing/ecma.js";
export * as predicates from "./typing/predicates.js";
export * as tuple from "./typing/tuple.js";

/**
 * The last type in a tuple type, or `never` if the tuple is empty.
 * @template T - Tuple type to check.
 */
export type Last<T extends unknown[]> = T extends [...unknown[], infer Last]
  ? Last
  : never;

/**
 * The resulting type from adding values of two types with the `+` operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 */
export type AdditionResultType<L, R> = L extends object
  ? AdditionResultType<ToPrimitive<L>, R>
  : R extends object
    ? AdditionResultType<L, ToPrimitive<R>>
    : L extends string
      ? string
      : R extends string
        ? string
        : L extends bigint
          ? R extends bigint
            ? bigint
            : never
          : R extends bigint
            ? never
            : number;

/**
 * The resulting type from subtracting values of two types with the `-`
 * operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 */
export type SubtractionResultType<L, R> =
  ToNumeric<L> extends ToNumeric<R> ? ToNumeric<R> : never;

/**
 * The resulting type from multiplying values of two types with the `*`
 * operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 */
export type MultiplicationResultType<L, R> =
  ToNumeric<L> extends ToNumeric<R> ? ToNumeric<R> : never;

/**
 * The resulting type from dividing values of two types with the `/`
 * operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 */
export type DivisionResultType<L, R> =
  ToNumeric<L> extends ToNumeric<R> ? ToNumeric<R> : never;

/**
 * The resulting type from taking the remainder of values of two types with the
 * `%` operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 */
export type RemainderResultType<L, R> =
  ToNumeric<L> extends ToNumeric<R> ? ToNumeric<R> : never;

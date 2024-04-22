import { ToNumeric, ToPrimitive } from "./typing/ecma.js";
export * as ecma from "./typing/ecma.js";

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

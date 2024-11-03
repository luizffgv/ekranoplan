import { MultiplicationResultType } from "../../typing.js";

/**
 * Multiplies two values using the `*` operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 * @param lhs - Left operand.
 * @param rhs - Right operand.
 * @returns Product of {@link rhs} and {@link lhs}.
 */
export function multiply<L, R>(lhs: L, rhs: R): MultiplicationResultType<L, R> {
  // @ts-expect-error TypeScript doesn't like arithmetic with non-number types
  return (lhs * rhs) as MultiplicationResultType<L, R>;
}

export default multiply;

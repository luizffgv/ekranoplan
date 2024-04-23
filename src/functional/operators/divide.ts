import { DivisionResultType } from "../../typing.js";

/**
 * Divides two values using the `/` operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 * @param lhs - Left operand.
 * @param rhs - Right operand.
 * @returns Division of {@link rhs} and {@link lhs}.
 */
export function divide<L, R>(lhs: L, rhs: R): DivisionResultType<L, R> {
  // @ts-expect-error TypeScript doesn't like arithmetic with non-number types
  return (lhs / rhs) as DivisionResultType<L, R>;
}

export default divide;

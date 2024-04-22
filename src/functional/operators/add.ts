import { AdditionResultType } from "../../typing.js";

/**
 * Adds two values using the `+` operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 * @param lhs - Left operand.
 * @param rhs - Right operand.
 * @returns Sum of {@link lhs} and {@link rhs}.
 */
export function Add<L, R>(lhs: L, rhs: R): AdditionResultType<L, R> {
  // @ts-expect-error TypeScript doesn't like additions with union types
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return (lhs + rhs) as AdditionResultType<L, R>;
}

export default Add;

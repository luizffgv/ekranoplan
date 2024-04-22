import { SubtractionResultType } from "../../typing.js";

/**
 * Subtracts two values using the `-` operator.
 * @template L - Left operand type.
 * @template R - Right operand type.
 * @param lhs - Left operand.
 * @param rhs - Right operand.
 * @returns Subtraction of {@link rhs} from {@link lhs}.
 */
export function Subtract<L, R>(lhs: L, rhs: R): SubtractionResultType<L, R> {
  // @ts-expect-error TypeScript doesn't like additions with non-number types
  return (lhs - rhs) as SubtractionResultType<L, R>;
}

export default Subtract;

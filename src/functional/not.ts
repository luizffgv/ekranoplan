import { Not } from "../typing/predicates.js";

/**
 * - When passed a function: Returns a new function identical to the original
 * but with a negated result.
 * - When passed another value: Negates the value using the `!` operator.
 * @param value - Value or function to negate.
 * @returns Negated value or function.
 */
export function not<T>(
  value: T,
): T extends (...args: infer Args) => infer R
  ? (...args: Args) => Not<R>
  : Not<T> {
  // Can we do this without the type assertion?
  return (typeof value === "function" ? () => !value() : !value) as ReturnType<
    typeof not<T>
  >;
}

export default not;

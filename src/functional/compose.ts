import { Last } from "../typing.js";

/**
 * A function that accepts an argument of any type and returns an unknown type.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SingleArgumentFunction = (arg: any) => unknown;

/**
 * `true` if the type {@link T} is an array of functions that can be composed,
 * that is, the output of the Nth function has the same type as the input of the
 * (N + 1)th function. `false` otherwise.
 *
 * If the array is empty or has a single function, we consider it composable.
 * @template T - Array of functions to check.
 */
type IsComposableFnArray<T extends SingleArgumentFunction[]> = T extends [
  SingleArgumentFunction,
  SingleArgumentFunction,
  ...infer Rest extends SingleArgumentFunction[],
]
  ? ReturnType<T[0]> extends Parameters<T[1]>[0]
    ? IsComposableFnArray<[T[1], ...Rest]>
    : false
  : true;

/**
 * Composes a list of functions into a single function that sends its argument
 * to the first function, then sends the output of the first function to the
 * second, until the last function. Then its output is returned.
 *
 * This does not infer types correctly for functions that have different return
 * types based on the input type. See
 * https://github.com/microsoft/TypeScript/issues/40179
 * @template T - Tuple type of functions to compose.
 * @param functions - Functions to compose.
 * @returns A function produced from the composition.
 */
export function compose<
  T extends [...SingleArgumentFunction[], SingleArgumentFunction],
>(
  ...functions: IsComposableFnArray<T> extends true ? T : never
): (arg: Parameters<T[0]>[0]) => ReturnType<Last<T>> {
  return (arg) => {
    for (const function_ of functions) {
      arg = function_(arg);
    }

    return arg as ReturnType<Last<T>>;
  };
}

export default compose;

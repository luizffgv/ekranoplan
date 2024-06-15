type One = [unknown];

type Integer = unknown[];

type Increment<N extends Integer> = [...N, ...One];

type Value<N extends Integer> = N["length"];

type Curry_<
  F extends (...args: never[]) => unknown,
  N extends number,
  Current extends Integer,
> =
  N extends Value<Current>
    ? F
    : Parameters<F> extends [infer First, ...infer Rest]
      ? (
          arg: First,
        ) => Curry_<(...args: Rest) => ReturnType<F>, N, Increment<Current>>
      : Parameters<F> extends Array<infer T>
        ? (
            arg: T,
          ) => Curry_<(...args: T[]) => ReturnType<F>, N, Increment<Current>>
        : never;

/**
 * The type of a function after it's curried.
 * @template F - Function to curry.
 * @template N - Number of arguments to split into. The last function takes all
 * remaining arguments.
 */
export type Curry<
  F extends (...args: never[]) => unknown,
  N extends number,
> = N extends 0 ? never : Curry_<F, N, One>;

/**
 * Curries a function.
 *
 * The function will be split into a chain of count {@link arity} functions,
 * each function taking one argument and returning a function that takes the
 * next argument.
 *
 * The last function takes all remaining arguments and returns the result of the
 * original function when called with **all** provided arguments.
 * @param fn - Function to curry.
 * @param arity - Number of arguments to curry.
 * @param _args - Internal, don't use.
 * @returns Chain of functions for currying.
 */
export function curry<
  F extends (...args: never[]) => unknown,
  A extends number,
>(fn: F, arity: A extends 0 ? never : A, ..._args: unknown[]): Curry<F, A> {
  if (arity === 0) {
    // @ts-expect-error Making this type-safe seems like a lot of work and I'm
    // not smart enough right now.
    return fn(..._args);
  }

  // @ts-expect-error Making this type-safe seems like a lot of work and I'm not
  // smart enough right now.
  return (...args: unknown[]) => curry(fn, arity - 1, ...[..._args, ...args]);
}

export default curry;

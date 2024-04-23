/**
 * A type that is `true` if the booleans provided in {@link B} are all `true`,
 * or `boolean` if there are no `false` booleans, or `false` otherwise.
 *
 * Behavior is not defined if {@link B} is empty.
 * @template B - The booleans to check.
 */
export type And<B extends boolean[]> = B extends [
  infer Head,
  ...infer Tail extends boolean[],
]
  ? Head extends false
    ? false
    : And<Tail>
  : true;

/**
 * A type that is `true` if at least one boolean provided in {@link B} is
 * `true`, or `boolean` if at least one boolean is `boolean`, or `false`
 * otherwise.
 *
 * Behavior is not defined if {@link B} is empty.
 * @template B - The booleans to check.
 */
export type Or<B extends boolean[]> = B extends [
  infer Head,
  ...infer Tail extends boolean[],
]
  ? Head extends true
    ? true
    : Or<Tail>
  : false;

/**
 * A type that is `true` if the type {@link L} extends type {@link R}, or
 * `false` otherwise.
 */
export type Extends<L, R> = [L] extends [R] ? true : false;

/**
 * A type that is `true` if the types {@link L} and {@link R} are equal.
 * If either type is `any`, the result is `true`.
 */
export type Equals<L, R> = And<[Extends<L, R>, Extends<R, L>]>;

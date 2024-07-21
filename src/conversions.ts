/**
 * Adds helpers for performing common conversions between types, such as
 * narrowing.
 * @module
 */

/**
 * Identity function if {@link value} is not nullish, otherwise throws.
 *
 * This essentially returns {@link value} but with `null | undefined` removed
 * from its type union by ensuring that the function throws when {@link value}
 * is nullish.
 *
 * Returns `never` if {@link T} has an always-nullish type.  This helps prevent
 * occurrences of always-throwing calls.
 * @template T - Type of the value.
 * @param value - Value to check.
 * @param error - Error to show if {@link value} is nullish.
 * @returns Non-nullable {@link value} (`null | undefined` removed from its type
 * union).
 * @throws A {@link TypeError} if {@link value} is nullish.
 * @example Basic usage.
 * ```ts
 * // element1 has type HTMLElement | null
 * const element1 = document.getElementById("img");
 *
 * // element2 has type HTMLElement
 * const element2 = throwIfNull(document.getElementById("form"));
 * ```
 */
export function throwIfNull<T>(
  value: T,
  error?: string | undefined,
): T extends undefined | null ? never : NonNullable<T> {
  if (value == null) {
    throw new TypeError(error ?? "throwIfNull received a nullish value.");
  }

  // @ts-expect-error The compiler doesn't know that this will never be reached
  // if value is nullish
  return value;
}

/**
 * Identity function if {@link value} is an instance of {@link constructor},
 * otherwise throws.
 * @template T - Type of the value.
 * @template C - Type of the constructor.
 * @param value - Value to check.
 * @param constructor - Constructor to check against.
 * @param error - Error to show if {@link value} is not an instance of
 * {@link constructor}.
 * @returns Forwards {@link value} if it is an instance of {@link constructor}.
 * - If {@link T} extends InstanceType<{@link C}>, the returned type is
 * {@link T} and this never throws.
 * - If InstanceType<{@link C}> extends {@link T}, the returned type is
 * InstanceType<{@link C}> and this may throw.
 * - Otherwise the return type is `never` and this always throws.
 *
 * The type narrowing of this function depends on TypeScript's `extends`
 * keyword, which doesn't perfectly mirror JS inheritance, so it may not always
 * assign the correct return type.
 * @throws A {@link TypeError} if {@link value} is not an instance of
 * {@link constructor}.
 */
export function trySpecify<
  T extends object,
  C extends new (...args: never[]) => unknown,
>(
  value: T,
  constructor: C,
  error?: string | undefined,
): T extends InstanceType<C>
  ? T
  : InstanceType<C> extends T
    ? InstanceType<C>
    : never {
  if (!(value instanceof constructor)) {
    throw new TypeError(error ?? "trySpecify received a non-instance value.");
  }

  // @ts-expect-error The compiler doesn't know that this will never be reached
  // if value isn't an instance of constructor
  return value;
}

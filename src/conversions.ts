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

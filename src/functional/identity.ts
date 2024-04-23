/**
 * Returns the value passed in as-is.
 * @param value - Value to return.
 * @returns The value in {@link value}.
 */
export function identity<T>(value: T): T {
  return value;
}

export default identity;

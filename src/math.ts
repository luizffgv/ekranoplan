/**
 * Provides math utilities.
 * @module
 */

/**
 * Linearly interpolates between two numbers.
 * @param from - Starting value.
 * @param to - Final value.
 * @param where - Progress between {@link from} and {@link to}, in the interval
 * [0, 1]
 * @returns Value of {@link from} if {@link where} = 0, value of {@link to} if
 * {@link where} = 1, and a value between {@link from} and {@link to} otherwise.
 */
export function lerp(from: number, to: number, where: number): number {
  return from + (to - from) * where;
}

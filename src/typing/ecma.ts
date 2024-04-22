/**
 * @file Contains types that mimic the types and abstract operations described
 * in the ECMAScript language specification.
 */

/** Type union containing all primitive types. */
export type PrimitiveType =
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined
  | symbol;

/**
 * The resulting type of the ECMAScript `OrdinaryToPrimitive` abstract
 * operation.
 */
export type OrdinaryToPrimitive<
  T,
  H extends "string" | "number",
> = T extends object
  ? H extends "string"
    ? T extends { toString(): infer R extends PrimitiveType }
      ? R
      : T extends { valueOf(): infer R extends PrimitiveType }
        ? R
        : never
    : H extends "number"
      ? T extends { valueOf(): infer R extends PrimitiveType }
        ? R
        : T extends { toString(): infer R extends PrimitiveType }
          ? R
          : never
      : never
  : never;

/**
 * The resulting type of the ECMAScript `ToPrimitive` abstract operation.
 * @template T - The type to convert to a primitive.
 * @template P - The optional preferredType hint.
 */
export type ToPrimitive<
  T,
  P extends "string" | "number" | undefined = undefined,
> = T extends object
  ? P extends undefined
    ? T extends { [Symbol.toPrimitive](hint: "default"): infer R }
      ? R extends object
        ? never
        : R
      : OrdinaryToPrimitive<T, "number">
    : P extends "string"
      ? T extends { [Symbol.toPrimitive](hint: "string"): infer R }
        ? R extends object
          ? never
          : R
        : OrdinaryToPrimitive<T, "string">
      : T extends { [Symbol.toPrimitive](hint: "number"): infer R }
        ? R extends object
          ? never
          : R
        : OrdinaryToPrimitive<T, "number">
  : T;

/**
 * The resulting type of the ECMAScript `ToNumber` abstract operation.
 * @template T - The type of the argument.
 */
export type ToNumber<T> = T extends number | string | undefined
  ? number
  : T extends symbol | bigint
    ? never
    : T extends null | false
      ? 0
      : T extends true
        ? 1
        : ToNumber<ToPrimitive<T, "number">>;

/**
 * The resulting type of the ECMAScript `ToNumeric` abstract operation.
 * @template T - The type of the argument.
 */
export type ToNumeric<T> =
  ToPrimitive<T> extends bigint ? bigint : ToNumber<ToPrimitive<T>>;

import { Add } from "./operators/add.js";
export { Add };

/** Shorthand operator symbols for some functions. */
export const tokens = {
  "+": Add,
} as const;

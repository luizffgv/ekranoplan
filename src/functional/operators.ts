import { Add } from "./operators/add.js";
import { Subtract } from "./operators/subtract.js";
export { Add, Subtract };

/** Shorthand operator symbols for some functions. */
export const tokens = {
  "+": Add,
  "-": Subtract,
} as const;

import { add } from "./operators/add.js";
import { divide } from "./operators/divide.js";
import { multiply } from "./operators/multiply.js";
import { subtract } from "./operators/subtract.js";
export { add, divide, multiply, subtract };

/** Shorthand operator symbols for some functions. */
export const tokens = {
  "+": add,
  "/": divide,
  "*": multiply,
  "-": subtract,
} as const;

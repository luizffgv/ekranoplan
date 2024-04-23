import { Add } from "./operators/add.js";
import { Divide } from "./operators/divide.js";
import { Multiply } from "./operators/multiply.js";
import { Subtract } from "./operators/subtract.js";
export { Add, Divide, Multiply, Subtract };

/** Shorthand operator symbols for some functions. */
export const tokens = {
  "+": Add,
  "/": Divide,
  "*": Multiply,
  "-": Subtract,
} as const;

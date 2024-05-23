/** @type {Partial<import('typedoc').TypeDocOptions>} */
export default {
  entryPoints: ["src/index.ts"],
  tsconfig: "tsconfig.json",
  plugin: ["typedoc-material-theme"],
};

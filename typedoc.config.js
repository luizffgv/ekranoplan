/** @type {Partial<import('typedoc').TypeDocOptions & {themeColor: string}>} */
export default {
  entryPoints: ["src/"],
  entryPointStrategy: "expand",
  exclude: ["**/*.test.ts"],
  tsconfig: "tsconfig.json",
  plugin: ["typedoc-material-theme"],
  themeColor: "#e6e7e9",
};

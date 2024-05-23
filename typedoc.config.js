/** @type {Partial<import('typedoc').TypeDocOptions & {themeColor: string}>} */
export default {
  entryPoints: ["src/index.ts"],
  tsconfig: "tsconfig.json",
  plugin: ["typedoc-material-theme"],
  themeColor: "#e6e7e9",
};

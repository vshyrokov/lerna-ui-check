import typescript from "rollup-plugin-typescript2";

export default {
  input: [
    "packages/elements/footer/src/index.tsx",
    "packages/elements/header/src/index.tsx",
  ],
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [typescript()],
  external: ["react"],
};

import typescript from 'rollup-plugin-typescript2';

export default {
    input: ["footer/src/index.tsx", "header/src/index.tsx"],
    output: [
        {
            dir: "dist",
            entryFileNames: "[name].js",
            format: "cjs",
            exports: "named"
        }
    ],
    plugins: [
        typescript(),
    ],
    external: ["react"]
};

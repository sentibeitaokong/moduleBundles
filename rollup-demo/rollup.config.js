import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
export default {
    input: 'src/index.ts',
    output:[{
        //commonjs类型
        file:"dist/bundle.cjs",
        format:'cjs'
    },{
        //esm类型
        file:"dist/bundle.js",
        format: "esm"
    },{
        //闭包类型
        file:"dist/bundle.dist.js",
        format: "iife"
    },{
        //umd类型
        file:"dist/bundle.umd.js",
        format: "umd"
    }],
    plugins:[typescript(),terser()]
}
import {defineConfig} from "tsup";
export default defineConfig([{
    entry:["src/index.ts"],
    format:["esm"],
    minify:true,
    dts:true
},{
    entry:["src/index.ts"],
    format:["cjs"],
    minify:true,
    dts:true
},{
    entry:["src/index.ts"],
    format:["iife"],
    minify:true,
    dts:true
}])
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";
import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
// https://vitejs.dev/config/
const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({
    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    },
    plugins: [
        vue(), 
        vueJsx({}), 
        Unocss()
    ],
    build: {
        rollupOptions,
        minify: false,
        sourcemap: true, // 输出单独 source文件
        brotliSize: true,  // 生成压缩大小报告
        lib: {
            entry: "./src/entry.ts",
            name: "hfunUI",
            fileName: "hfun-ui",
            // 导出模块格式
            formats: ["esm", "umd", "iife"],
        },
        cssCodeSplit: true,
    }

});
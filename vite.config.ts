import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 借助node里的path来配置@绝对路径
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置一下@绝对路径
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
           @import "@/assets/styles/variables.less";
           @import "@/assets/styles/mixins.less";
         `,
      },
    },
  },
});

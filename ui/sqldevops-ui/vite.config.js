import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 路径别名
    },
    extensions: [".js", ".ts", ".json"], // 导入时想要省略的扩展名列表
  },
  server: {
    // 配置前端服务地址和端口
    //自定义代理规则
    proxy: {
      // 选项写法
      "/api": {
        target: "http://192.168.90.233:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

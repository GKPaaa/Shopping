import { createRouter, createWebHashHistory } from "vue-router";
import layout from "@/views/layout/index.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        //首页
        { path: "", component: () => import("@/views/home/index.vue") },
        {
          // 一级分类
          path: "category/:id",
          component: () => import("@/views/category/index.vue"),
          props: true,
        },
        {
          // 二级分类
          path: "category/sub/:id",
          component: () => import("@/views/category/sub.vue"),
          props: true,
        },
      ],
    },
  ], //layout没有必要配置成路由懒加载 写法,因为每个页面都要用layout
});
export default router;

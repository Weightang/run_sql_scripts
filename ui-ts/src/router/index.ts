import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

import Home from "@/views/home.vue";
import User from "@/views/user.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/user",
        name: "user",
        component: User,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

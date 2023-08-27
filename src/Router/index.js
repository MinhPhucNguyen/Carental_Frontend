import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin";
import app from "./app";
const routes = [...admin, ...app];

const router = createRouter({
   history: createWebHistory(),
   routes: routes,
});

export default router;

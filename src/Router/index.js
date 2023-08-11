import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage/HomePage.vue";
import AboutPage from "../pages/AboutPage/AboutPage.vue";
import BlogPage from "../pages/BlogPage/BlogPage.vue";
import LoginPage from "../pages/LoginPage/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage/RegisterPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

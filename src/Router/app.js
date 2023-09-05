import HomePage from "../pages/HomePage/HomePage.vue";
import AboutPage from "../pages/AboutPage/AboutPage.vue";
import BlogPage from "../pages/BlogPage/BlogPage.vue";
import BlogDetail from "../pages/BlogDetail/BlogDetail.vue";
import CarDetail from "../pages/CarDetail/CarDetail.vue";
import AccountPage from "../pages/AccountPage/AccountPage.vue";
import LoginPage from "../pages/Auth/LoginPage.vue";
import RegisterPage from "../pages/Auth/RegisterPage.vue";
import App from "../layouts/app.vue";
import MyFavs from "@/pages/AccountPage/MyFavs/MyFavs.vue";
import AccountContent from "@/pages/AccountPage/AccountContent/AccountContent.vue";
import ChangePassword from "@/pages/AccountPage/ChangePassword/ChangePassword.vue";
import { useStore } from "vuex";

const app = [
   {
      path: "/",
      component: App,
      meta: {
         permission: "user",
      },
      children: [
         {
            path: "/",
            component: HomePage,
            name: "home",
         },
         {
            path: "about",
            component: AboutPage,
         },
         {
            path: "car/:carname/:id",
            component: CarDetail,
         },
         {
            path: "blog",
            component: BlogPage,
         },
         {
            path: "blog/:slug",
            component: BlogDetail,
         },
         {
            path: "login",
            component: LoginPage,
            name: "login",
            meta: {
               hideFooter: true,
            },
         },
         {
            path: "register",
            component: RegisterPage,
            name: "register",
            meta: {
               hideFooter: true,
            },
         },
         {
            path: "account",
            component: AccountPage,
            name: "account",
            meta: {
               requiresAuth: true,
            },
            beforeEnter: (to, from, next) => {
               if(useStore().getters["auth/getUser"] && to.path === "/account") {
                  next();
               }
            },
            children: [
               {
                  path: "/account",
                  component: AccountContent,
               },
               {
                  path: "/myfavs",
                  component: MyFavs,
               },
               {
                  path: "/resetpw",
                  component: ChangePassword,
               },
            ],
         },
      ],
   },
];

export default app;

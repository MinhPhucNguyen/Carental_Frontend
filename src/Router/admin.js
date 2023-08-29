import AdminPage from "../layouts/admin.vue";
import DashboardPage from "../pages/Dashboard/Dashboard.vue";

const admin = [
   {
      path: "/admin",
      component: AdminPage,
      meta: {
         requiresAuth: true,
         permission: "admin",
      },
      children: [
         {
            path: "dashboard",
            component: DashboardPage,
            name: "admin.dashboard",
            meta: {
               requiresAuth: true,
            },
         },
      ],
   },
];

export default admin;

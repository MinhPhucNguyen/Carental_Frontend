import AdminPage from "../layouts/admin.vue";
import DashboardPage from "../pages/Admin/Dashboard/Dashboard.vue";
import UsersList from "../pages/Admin/Users/index.vue";
import CreateUser from "../pages/Admin/Users/create.vue";
import EditUser from "../pages/Admin/Users/edit.vue";
import UserProfile from "../pages/Admin/Users/profile.vue";
import MainProfile from "../components/Admin/Profile/MainProfile.vue";
import SendEmail from "../components/Admin/Profile/SendEmail.vue";

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
         },
         {
            path: "users",
            component: UsersList,
            name: "admin.users",
         },
         {
            path: "users/create",
            component: CreateUser,
            name: "admin.users.create",
         },
         {
            path: "users/:id/edit",
            component: EditUser,
            name: "admin.users.edit",
         },
         {
            path: "users/:id/profile",
            component: UserProfile,
            name: "admin.users.profile",
            children: [
               {
                  path: "",
                  component: MainProfile,
                  name: "admin.users.mainProfile",
               },
               {
                  path: "",
                  component: SendEmail,
                  name: "admin.users.sendEmail",
               },
            ],
            redirect: { name: "admin.users.mainProfile" },
         },
      ],
   },
];

export default admin;

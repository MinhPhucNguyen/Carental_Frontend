<template>
   <div id="wrapper">
      <!-- Sidebar -->
      <MainSidebar />
      <div id="content-wrapper" class="d-flex flex-column">
         <div id="content">
            <MainTopBar />
            <div class="main">
               <div class="container-fluid">
                  <div class="row mt-4">
                     <router-view></router-view>
                  </div>
               </div>
            </div>
         </div>
         <MainFooter />
      </div>
   </div>   
</template>

<script>
import '../../public/admin/css/bootstrap.min.css'
import '../../public/admin/css/sb-admin-2.min.css'

import MainSidebar from "@/components/Admin/Sidebar.vue";
import MainTopBar from "@/components/Admin/Topbar.vue";
import MainFooter from "@/components/Admin/Footer.vue";

export default {
   name: "AdminPage",
   components: { MainTopBar, MainSidebar, MainFooter },
   setup() {
      return {};
   },
};
</script>

<style></style>

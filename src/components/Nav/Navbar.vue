<template>
  <nav class="navbar navbar-expand-lg">
    <div class="navbar-container text-dark p-0 d-flex">
      <a class="navbar-brand text-dark fw-bold text-uppercase fs-4" href="/">
        CA<span style="color: #1cc88a">R</span>ENTAL
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="{{ __('Toggle navigation') }}"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link text-dark btn" href="">Về Chúng tôi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark btn" href="">Trở thành chủ xe</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark btn" href="">Blog</a>
          </li>
          <li class="nav-item">
            <span class="nav-item-border"></span>
          </li>
          <!-- Authentication Links -->
          <div class="authentication-container d-flex">
            <li id="login-btn" class="nav-item m-0">
              <a class="nav-link text-dark btn" href="{{ route('login') }}"
                >Đăng nhập</a
              >
            </li>

            <li id="register-btn" class="nav-item border border-dark rounded-3">
              <a class="nav-link text-dark btn" href="{{ route('register') }}"
                >Đăng ký</a
              >
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
};
</script>

<style scoped>
.navbar {
  height: 88px;
}

.navbar .navbar-container {
  width: 80%;
  margin: 0 auto;
  font-size: 10px;
}

.navbar-brand {
  letter-spacing: 2px;
}

.navbar-nav li {
  margin-left: 28px;
}

.nav-item .nav-item-border {
  padding-bottom: 16px;
  border: 1px solid #8f8e8e;
  margin-right: 28px;
}

.nav-link {
  cursor: pointer;
}

.nav-item .nav-link {
  font-size: 15px;
  font-weight: 500;
}

.signup-btn,
.login-btn {
  width: 100%;
  background: #1cc88a;
}

.signup-btn:hover,
.login-btn:hover {
  background: #26b480;
}

.main.content-container {
  width: 80%;
  margin: 0 auto;
  padding-left: 0;
}
.content {
  padding: 0;
}

.nav-item .nav-link:hover {
  color: #1cc88a !important;
  transition: all 0.3s ease-in-out;
}

.nav-item:hover {
  border-color: #1cc88a !important;
  transition: all 0.3s ease-in-out;
}

</style>

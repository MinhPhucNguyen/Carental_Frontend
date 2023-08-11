<template>
  <div class="col-md-4 mx-auto">
    <div class="card" style="margin-top: 100px">
      <div class="card-header text-center bg-white">
        <h3 class="text-dark">Đăng nhập</h3>
      </div>
      <div class="card-body mx-auto" style="width: 500px">
        <form method="POST" id="login-form">
          <div class="form-group row mb-2">
            <label
              for="username"
              class="col-md-3 col-form-label text-md-right fw-bold w-100"
              >Tên Đăng nhập</label
            >
            <div class="col-md-12">
              <input
                id="username"
                type="text"
                class="form-control p-3"
                name="username"
                placeholder="Nhập Tên đăng nhập"
                autofocus
              />
            </div>
          </div>
          <div class="form-group row mb-1">
            <label
              for="password"
              class="col-md-3 col-form-label text-md-right fw-bold"
              >Mật khẩu</label
            >
            <div class="col-md-12">
              <input
                id="password"
                type="password"
                class="form-control p-3"
                name="password"
                placeholder="Nhập Mật khẩu"
                autofocus
              />
            </div>
          </div>
          <p class="" style="text-align: right">
            <a href="" style="color: #1cc88a; text-decoration: none"
              >Quên Mật khẩu ?</a
            >
          </p>
          <div class="form-group row mb-3">
            <div class="col-md-12">
              <button
                type="submit"
                class="btn btn-lg w-100 fw-bold text-white login-btn"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
        <div class="form-group mb-0 d-flex justify-content-center">
          <p class="text-secondary">
            Bạn chưa là thành viên ?
            <router-link
              to="/register"
              class="fw-bold text-decoration-none"
              style="color: #1cc88a"
              >Đăng ký ngay</router-link
            >
          </p>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style lang="scss" scoped>
.login-btn {
  background: #1cc88a;

  &:hover {
    background: #26b480;
  }
}
</style>

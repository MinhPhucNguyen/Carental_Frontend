<template>
  <div class="col-md-4 mx-auto mb-4">
    <div class="card">
      <div class="card-header text-center bg-white">
        <h3 class="text-dark">Đăng ký</h3>
      </div>
      <div class="card-body">
        <form method="POST" class="row" id="register-form">
          <div class="form-group col-md-6 mb-2">
            <label for="firstname" class="col-form-label text-md-right fw-bold"
              >Tên</label
            >
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                name="firstname"
                id="firstname"
              />
            </div>
          </div>
          <div class="form-group col-md-6 mb-2">
            <label for="lastname" class="col-form-label text-md-right fw-bold"
              >Họ</label
            >
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                name="lastname"
                id="lastname"
              />
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="" class="fw-bolder">Giới tính</label>
            <div>
              <div class="form-check d-inline-block">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="1"
                />
                <label class="form-check-label" for="male"> Nam </label>
              </div>
              <div style="width: 10px; display: inline-block"></div>
              <div class="form-check d-inline-block">
                <input
                  class="form-check-input"
                  name="gender"
                  type="radio"
                  id="female"
                  value="0"
                />
                <label class="form-check-label" for="female"> Nữ </label>
              </div>
            </div>
          </div>
          <div class="form-group col-md-6 mb-2">
            <label
              for="username"
              class="col-md-12 col-form-label text-md-right fw-bold"
              >Tên đăng nhập</label
            >
            <div class="col-md-12">
              <input
                id="username"
                type="text"
                class="form-control"
                name="username"
              />
            </div>
          </div>

          <div class="form-group col-md-6 mb-2">
            <label
              for="phone"
              class="col-md-12 col-form-label text-md-right fw-bold"
              >Số điện thoại</label
            >

            <div class="col-md-12">
              <input id="phone" type="text" class="form-control" name="phone" />
            </div>
          </div>

          <div class="form-group mb-2">
            <label
              for="email"
              class="col-md-3 col-form-label text-md-right fw-bold"
              >Email</label
            >
            <div class="col-md-12">
              <input id="email" type="text" class="form-control" name="email" />
            </div>
          </div>

        
          <div class="form-group mb-2">
            <label
              for="address"
              class="col-md-3 col-form-label text-md-right fw-bold"
              >Địa chỉ</label
            >

            <div class="col-md-12">
              <input
                id="address"
                type="text"
                class="form-control"
                name="address"
              />
            </div>
          </div>

          <div class="form-group col-md-6 mb-4">
            <label
              for="password"
              class="col-md-12 col-form-label text-md-right fw-bold"
              >Mật khẩu</label
            >

            <div class="col-md-12">
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
              />
            </div>
          </div>

          <div class="form-group col-md-6 mb-4">
            <label
              for="confirm_password"
              class="col-md-12 col-form-label text-md-right fw-bold"
              >Nhập lại mật khẩu</label
            >

            <div class="col-md-12">
              <input
                id="confirm_password"
                type="password"
                class="form-control"
                name="confirm_password"
              />
            </div>
          </div>
          <div class="form-group mb-2">
            <div class="col-md-12">
              <button
                type="submit"
                class="btn btn-lg fw-bold text-white mb-4 signup-btn"
                name="register-btn"
              >
                Đăng ký
              </button>
            </div>
          </div>

          <hr />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style scoped>
.card-body {
  margin-top: 5px;
}
input[type="radio"]:checked {
  background-color: #1cc88a;
  border-color: #1cc88a;
}
.signup-btn {
  width: 100%;
  background: #1cc88a;
}
.signup-btn:hover {
  background: #26b480;
}
</style>

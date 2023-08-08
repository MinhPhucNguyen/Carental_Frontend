<template>
  <section id="footer">
    <div class="footer-container">
      <div class="footer-left">
        <a href="">CA<span style="color: #1cc88a">R</span>ENTAL</a>
        <div class="phone-mail">
          <a href="" class="item mb-4">
            <p>1900 9217</p>
            <p>Support 7AM-10PM</p>
          </a>
          <a href="" class="item">
            <p>contact@gmail.com</p>
            <p>Ask a question for carental</p>
          </a>
        </div>
      </div>
      <div class="footer-right">
        <div class="item">
          <p class="main fw-bold">Chính sách</p>
          <div class="item-sub">
            <a href="">Chính sách và quy định</a>
            <a href="">Quy chế hoạt động</a>
            <a href="">Bảo mật thông tin</a>
            <a href="">Giải quyết tranh chấp</a>
          </div>
        </div>
        <div class="item">
          <p class="main fw-bold">Tìm hiểu thêm</p>
          <div class="item-sub">
            <a href="">Hướng dẫn chung</a>
            <a href="">Hướng dẫn đặt xe</a>
            <a href="">Hướng dẫn thanh toán</a>
            <a href="">Hỏi và trả lời</a>
          </div>
        </div>
        <div class="item">
          <p class="main mb-4"></p>
          <div class="item-sub findout">
            <a href="">Về Carental</a>
            <a href="">Carental Blog</a>
            <a href="">Tuyển dụng</a>
          </div>
        </div>
        <div class="item">
          <p class="main fw-bold">Đối tác</p>
          <div class="item-sub">
            <a href="">Đăng ký chủ xe Carental</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped>
#footer {
  width: 100%;
  background: #f7f7f7;
  padding: 60px 0;
  background-color: white;
}

.footer-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
}

.footer-left {
  width: 35%;
  padding: 0 30px 30px 0;
}

.footer-left > a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 50px;
  display: block;
  margin-bottom: 20px;
}

.phone-mail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.phone-mail .item {
  text-decoration: none;
  color: black;
}

.phone-mail .item p:last-child {
  color: #8f8e8e;
}

.footer-right {
  display: flex;
  justify-content: space-between;
}

.footer-right .item {
  padding: 20px;
  margin-right: 35px;
}

.footer-right .item .main {
  margin-bottom: 20px;
}

.footer-right .item .item-sub {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.footer-right .item .item-sub a {
  text-decoration: none;
  color: #8f8e8e;
  margin-bottom: 30px;
  text-align: left;
}

.footer-right .item .item-sub a:hover {
  color: black;
  transition: all 0.2s ease-in-out;
}
</style>

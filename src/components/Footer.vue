<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="logo">
        <h2>PopcornReady</h2>
      </div>
      <div class="footer-names">
        <span>Home</span>
        <span>Browse</span>
        <span>Trending</span>
        <span>Contact Us</span>
      </div>
      <div class="footer-socials">
        <span class="social-icon"><i class="bx bxl-facebook-circle"></i></span>
        <span class="social-icon"><i class="bx bxl-twitter"></i></span>
        <span class="social-icon"><i class="bx bxl-instagram"></i></span>
      </div>

      <p>© 2024 PopcornReady. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: rgb(30, 30, 30);
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: 50px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.footer-logo h2 {
  font-family: "Pacifico", sans-serif;
  color: #ffcc00;
}

.footer-names {
  display: flex;
  gap: 20px;
  font-size: 0.9em;
  color: #fff;
  text-decoration: none;
}

.footer-names span {
  color: #fff;
  cursor: pointer;
}

.footer-names span:hover {
  color: #ffcc00;
}


.footer-socials {
  display: flex;
  gap: 15px;
}

.social-icon {
  color: #fff;
  font-size: 1.5em;
  transition: color 0.3s;

}

.social-icon:hover {
  color: #ffcc00;
}

.footer-copyright {
  font-size: 0.8em;
  color: #aaa;
  margin-top: 10px;
}
</style>
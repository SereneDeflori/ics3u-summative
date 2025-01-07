<template>
  <section id="Home" class="Hero"></section>
  <div class="hero-section">
    <div class="hero-content">
      <h1>
        Welcome to <span class="highlight">PopcornReady</span>
      </h1>
    </div>
    <div class="form-container">
      <h2>Stream your favourite movies and TV shows</h2>
      <p>
        Excited to start watching? Enter your email to sign up or reactivate your
        membership.
      </p>
      <input type="email" placeholder="Email address" class="email-input" />
      <button class="button join">Get Started</button>
    </div>
  </div>
</template>



<style scoped>
.hero-section {
  position: relative;
  background-color: #ffcc00;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/img/home2.png');
  text-align: center;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  padding: 20px; 
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  margin-bottom: 20px; 
}

.hero-content h1 {
  font-size: 2.5rem;
  margin: 0 0 20px;
}

.hero-btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #ffcc00;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: background-color 0.3s;
}

.hero-btn:hover {
  background-color: #ff9900;
}

.form-container {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  align-items: center;
  width: 90%;
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.096); 
  margin-top: 20px auto;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.form-container h2 {
  margin-bottom: 10px;
}

.form-container p {
  margin-bottom: 20px;
}

.email-input {
  width: 100%;
  max-width: 900px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box
}

.button.join {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ffcc00;
  color: #333;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button.join:hover {
  background-color: #ff9900;
}

.highlight {
  color: #ffcc00;
  font-weight: 900;
}
</style>
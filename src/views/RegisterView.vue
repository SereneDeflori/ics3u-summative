<script setup>
import Header from '../components/Header.vue';
import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from 'vue-router';
import { useStore } from "../store"

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const store = useStore();

async function registerByEmail() {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email.value, password.value)).user;
    await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });
    store.user = user;
    router.push("/movies/all");
  } catch (error) {
    alert("There was an error creating a user with email!");
  }
}

async function registerByGoogle() {
  try {
    const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
    store.user = user;
    router.push("/movies/all");
  } catch (error) {
    alert("There was an error creating a user with Google!");
  }
}
</script>

<template>
<Header />
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
      </div>
      <div class="form-container">
        <h2>Create an Account</h2>
        <form @submit.prevent="registerByEmail()">
          <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required>
          <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required>
          <input v-model="email" type="email" placeholder="Email" class="input-field" required>
          <input v-model="password" type="password" placeholder="Password" class="input-field" required>
          <input v-model="confirmPassword" type="password" placeholder="Re-Enter Password" class="input-field" required>
          <button type="submit" class="button register">Register</button>
        </form>
          <button @click="registerByGoogle()" type="submit" class="button register">Register by Google</button>
    </div>
  </div>
</div>
</template>


<style scoped>
.hero {
  position: relative;
  background-color: #ffcc00;
  background-image: url(../assets/img/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  padding-top: 80px; 
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 1;
}

.button-container {
  margin-left: auto; 
}

.button {
  background-color: #ffcc00;
  color: #fff;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin-right: 40px;
  white-space: nowrap; 
}

.button:hover {
  background-color: #ff9900;
}

.button-register {
  background-color: #ffcc00;
  color: #fff;
  width: 100%;
  max-width: 400px; 
  padding: 12px 20px;  
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s;
  white-space: nowrap;
  display: block; 
  margin: 0 auto;  
}

.button:link, .button:visited {
  color: #fff;
}

.form-container {
  background-color: transparent;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  z-index: 2;
  text-align: center;
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.form-container h2 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
}

.input-field {
  width: 100%; 
  max-width: 400px; 
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #eee;
}

.input-field:focus {
  border-color: #ffcc00;
  outline: none;
  background-color: #fff;
}
</style>

<script setup>
import { useStore } from "../store";
import { computed } from "vue";
import { useRouter } from "vue-router"; // Import the router

const store = useStore();
const router = useRouter(); // Initialize the router

const isLoggedIn = computed(() => store.isLoggedIn);

const logout = () => {
  store.logout();
  router.push("/login"); // Redirect to the login page after logging out
};
</script>

<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="logo-container">
        <h1 class="logo">PopcornReady</h1>
      </div>
      <div class="menu-container">
        <ul class="menu-list">
          <li class="menu-list-item active">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="menu-list-item">
            <RouterLink to="/movies">Movies</RouterLink>
          </li>
          <li class="menu-list-item">
            <RouterLink to="/#feature-section">Trending</RouterLink>
          </li>
        </ul>
      </div>

      <div class="button-container">
        <template v-if="!isLoggedIn">
          <RouterLink to="/Login">
            <button class="my-button">Sign In</button>
          </RouterLink>
          <RouterLink to="/Register">
            <button class="my-button2">Sign Up</button>
          </RouterLink>
        </template>

        <template v-else>
          <span>Hello {{ store.firstName }}!</span>
          <RouterLink to="/cart">
            <button class="my-button">Cart</button>
          </RouterLink>
          <RouterLink to="/settings">
            <button class="my-button2">Settings</button>
          </RouterLink>
          <button class="my-button" @click="logout">Logout</button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 50px;
  background-color: rgb(20, 19, 19);
  position: fixed;
  top: 0;  
  z-index: 10; 
}

.navbar-container {
  display: flex;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  font-family: "Lato", sans-serif;
}

.logo-container {
  flex: 2;
}

.logo {
  font-family: "Pacifico", serif;
  color: yellow;
  font-size: 30px;
  font-weight: 400;
  cursor: default;
}

.menu-container {
  flex: 8;
  color: white;
}

.menu-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list-item {
  margin: 0 100px;
  cursor: default;
  color: white;
}

.menu-list-item a:hover {
  text-decoration: underline; 
}

.menu-list-item.active {
  font-weight: bold;
}


.menu-list-item a {
  text-decoration: none;
  color: white; 
}

.button-container {
  flex: 2;
  display: flex;
  gap: 1rem;
  color: white;
}

.my-button {
  border: none;
  padding: 0.7rem 1.4rem;
  border-radius: 0.5rem;
  background-color: #eeede8;
}

.my-button2 {
  border: none;
  padding: 0.7rem 1.4rem;
  border-radius: 0.5rem;
  background-color: #ffcc00;
}

.my-button2:hover {
  background-color: #ffb300;
}

.my-button:hover {
  background-color: #e0e0e0;
}
</style>


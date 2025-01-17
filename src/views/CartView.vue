<script setup>
import { useStore } from '../store';

const store = useStore();
</script>

<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <div class="item" v-for="([key, movie]) in store.cart" :key="key">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" />
      <h1>{{ movie.title }}</h1>
      <button @click="store.cart.delete(key)">Remove</button>
      <button @click="">Check out</button>
    </div>
  </div>
</template>

//fix button checkout after

<style scoped>
h1 {
  color: #f5c518;
  text-align: center;
}

button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #e50914;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.cart {
  display: flex;
  flex-direction: column;
  background-color: #141414;
  gap: 2rem;
  height: 100vh;
  padding: 20px;
}

.item {
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: #1a1a1a;
  padding: 10px;
  border-radius: 8px;
  width: 220px;
  margin: 10px;
}

img {
  width: 100%; 
  height: 330px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px; 
}

button:hover {
  background-color: #c9302c;
}
</style>





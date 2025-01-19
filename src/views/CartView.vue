<script setup>
import { useStore } from '../store';

const store = useStore();

// Remove item from cart using the store method
function removeFromCart(itemId) {
  store.removeFromCart(itemId); // Calls the store's removeFromCart function
}

// Handle checkout process
function checkout() {
  store.checkout();  // Calls the store's checkout function which clears the cart
  alert("Thank you for your purchase!");
}
</script>

<template>
  <div class="cart">
    <h1>Your Cart</h1>
    
    <!-- Display cart items -->
    <div class="cart-items">
      <div class="item" v-for="([key, movie]) in store.cart" :key="key">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" />
        <h2>{{ movie.title }}</h2>
        <button @click="removeFromCart(key)">Remove</button>
      </div>
    </div>
    
    <!-- Checkout button -->
    <button v-if="store.cart.size > 0" @click="checkout" class="button checkout">Checkout</button>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

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
  justify-content: flex-start;
}

.cart-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); /* Grid layout with dynamic column sizes */
  gap: 20px; /* Space between items */
  justify-items: center; /* Center the items within each grid cell */
  align-items: start; /* Align items at the top of their grid cells */
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 220px; /* Limit the width to avoid stretching */
  margin: 0;
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

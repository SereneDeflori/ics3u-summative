<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from "../store"; 

const props = defineProps(["genres"]);
const router = useRouter();
const store = useStore(); 
const selectedGenre = ref(28);  
const response = ref(null);

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=eb2eed5560b3d22c0bf7bf03c76880f0&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`);
}

const isMovieInCart = (movie) => store.cart.has(movie.id);


const toggleMovieInCart = (movie) => {
  if (isMovieInCart(movie)) {
    store.removeFromCart(movie.id); 
  } else {
    store.addToCart(movie); 
  }
};


onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=eb2eed5560b3d22c0bf7bf03c76880f0&with_genres=${selectedGenre.value}`);
});
</script>

<template>
  <div class="movie-gallery">
    <h2 class="heading">Select Genre</h2>

    <select v-model="selectedGenre" @change="getMovieByGenre">
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.genreName }}</option>
    </select>

    <div v-if="response" class="movie-list">
      <div class="movie-card-container" v-for="movie in response.data.results" :key="movie.id">
        <div class="movie-card" @click="getMovieDetails(movie.id)">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
          <p class="movie-title">{{ movie.title }}</p>
        </div>

        <button
          class="buy-button"
          :class="{ 'added-button': isMovieInCart(movie) }"
          @click.stop="toggleMovieInCart(movie)"
        >
          {{ isMovieInCart(movie) ? "Added" : "Buy" }}
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.movie-gallery {
  padding: 60px 20px;
  color: white;
  background-color: #121212; 
  min-height: 100vh;
}

h2.heading {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #f5c518; 
}

select {
  display: block;
  margin: 0 auto 20px auto;
  background-color: #222;
  color: white;
  padding: 12px;
  border: 2px solid #333;
  border-radius: 8px;
  font-size: 1rem;
  width: 240px;
  text-align: center;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

select:focus {
  border-color: #f5c518;
  outline: none;
  background-color: #333;
}

select:hover {
  background-color: #333;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding: 20px 0;
}

.movie-card {
  background-color: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 220px;
  cursor: pointer;
}

.movie-card:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.movie-poster {
  width: 100%;
  height: 330px;
  object-fit: cover;
}

.movie-title {
  padding: 12px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #f5c518;
  background-color: #222;
  margin: 0;
}

.movie-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
}

.movie-card {
  background-color: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px
}

.movie-card:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.buy-button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #f5c518;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.buy-button:hover {
  background-color: #d4a017;
  transform: scale(1.05);
}

.added-button {
  background-color: #444;
  color: #ccc;
  cursor: not-allowed;
}

</style>


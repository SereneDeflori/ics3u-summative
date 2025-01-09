<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);
const numbers = ref([]);

numbers.value.push(Math.floor(Math.random() * 6));
numbers.value.push(6 + Math.floor(Math.random() * 7));
numbers.value.push(14 + Math.floor(Math.random() * 4));

async function getNowPlayingMovies() {
  response.value = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=eb2eed5560b3d22c0bf7bf03c76880f0');
}

onMounted(() => {
  getNowPlayingMovies();
})
</script>

<template>
  <div class="home">
    <section id="feature-section">
      <h2 class="heading">Now Playing</h2>
      <!-- Movie list section displaying 3 random movies -->
      <div v-if="response" class="movie-list">
        <div v-for="number in numbers" :key="response.data.results[number].id" class="movie-card">
          <img :src="`https://image.tmdb.org/t/p/w500${response.data.results[number].poster_path}`" alt="Movie Poster" class="movie-poster" />
          <p class="movie-title">{{ response.data.results[number].title }}</p>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.movie-gallery {
  padding: 60px 20px 20px;
  color: white;
  background-color: rgb(20, 19, 19); 
}

h2.heading {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #ffcc00; 
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 150px; 
}

.movie-card {
  background-color: #222; 
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease; 
  width: 200px; 
}

.movie-card:hover {
  transform: scale(1.05); 
}

.movie-poster {
  width: 100%; 
  height: auto;
}

.movie-title {
  padding: 10px;
  text-align: center;
  font-size: 1.1rem; 
  color: #e50914; 
}

.heading:hover {
  cursor: default;
  text-decoration: underline;
  font-size: 2.2rem; 
  font-weight: bold;
}
</style>



  
  
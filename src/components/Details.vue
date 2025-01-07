<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const response = await axios.get(
  `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=eb2eed5560b3d22c0bf7bf03c76880f0&append_to_response=videos`
);
</script>

<template>
  <div class="movie-detail">
    <h1 class="movie-title">{{ response.data.original_title }}</h1>

    <div class="poster-details">
      <div class="poster-container">
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
      </div>

      <div class="details-container">
        <h2 class="overview-title">Overview</h2>
        <p class="movie-overview">{{ response.data.overview }}</p>
        <p class="movie-runtime"><strong>Runtime:</strong> {{ response.data.runtime }} minutes</p>
        <p class="movie-rating"><strong>Rating:</strong> {{ response.data.vote_average }}</p>
        <p class="movie-language"><strong>Language:</strong> {{ response.data.spoken_languages[0]?.english_name }}</p>
        <p class="movie-release-date"><strong>Release Date:</strong> {{ response.data.release_date }}</p>
      </div>
    </div>
    <h2 class="trailers-title">Trailers</h2>
    <div class="trailers-container">
      <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
        <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
          <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer" class="trailer-thumbnail" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-detail {
  padding: 40px;
  color: white;
  background-color: #141414;
}

.movie-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

.poster-details {
  display: flex;
  gap: 30px; 
  align-items: flex-start; 
  justify-content: center; 
  margin-bottom: 40px;
}

.poster-container {
  flex: 0 0 auto;
  max-width: 300px;
  text-align: center; 
}

.movie-poster {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.movie-site {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #ffcc00;  
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.movie-site:hover {
  background-color: #ffb300;
}

.details-container {
  flex: 1; 
  display: flex;
  flex-direction: column; 
  gap: 20px; 
  justify-content: flex-start;
  text-align: left; 
}

.overview-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.movie-overview {
  font-size: 1.2rem;
  line-height: 1.5;
}

.movie-runtime,
.movie-rating,
.movie-language,
.movie-release-date {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.trailers-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.trailers-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; 
}

.trailer-tile {
  flex: 0 1 300px;
  max-width: 300px;
}

.trailer-thumbnail {
  width: 100%;
  border-radius: 10px;
  object-fit: cover; 
}
</style>









<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import Genres from "../components/Genres.vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'

const router = useRouter();
const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=eb2eed5560b3d22c0bf7bf03c76880f0');

function getMovieDetails(id) {
    router.push(`/movies/${id}`)
}


const genresList = [
  {
    id: 28,
    genreName: "Action"
  },
  {
    id: 12,
    genreName: "Adventure"
  },
  {
    id: 27,
    genreName: "Horror"
  },
  {
    id: 10751,
    genreName: "Family"
  },
  {
    id: 36,
    genreName: "History"
  },
]
</script>

<template>
  <Genres :genres="genresList" />
  <Header />
  <Footer />
</template>

<style scoped>

</style>
<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import Details from '../components/Details.vue'

const route = useRoute();
const response = await axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=eb2eed5560b3d22c0bf7bf03c76880f0&append_to_response=videos`);
</script>

<template>
    <Details />
</template>
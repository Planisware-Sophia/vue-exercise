<template>
  <!-- TODO: Replace & complete html below with proper Vue.js component -->
  <!-- @see https://developers.themoviedb.org/3/movies/get-movie-details -->
  
  <div v-if="movieDetails">
    <img :src="`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`" alt="" />
    <h1>{{ movieDetails?.title }}</h1>
    <p>{{ movieDetails?.overview }}</p>
  </div>

</template>

<script setup lang="ts">
import { getMovie, getMovieRecommendations } from '@/api/movies'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import type { Movie } from '@/types'

const route = useRoute()
const movieDetails = ref<Movie>()

watchEffect(() => {
  if (!route.params.id) {
    return
  }

  const movieId = parseInt(route.params.id as string)

  Promise.all([ getMovie(movieId), getMovieRecommendations(movieId) ])
  .then(([movie, reco]) => {
    movie.recommendations = reco.results.slice(0, 5)

    movieDetails.value = movie
  })
})
</script>
<style scoped>
img {
  width: 600px;
}
</style>


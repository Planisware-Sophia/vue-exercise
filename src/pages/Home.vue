<template>
  <div class="movie-list">
    <!-- TODO: Replace & complete html below with proper Vue.js component -->
    <!-- @see https://developers.themoviedb.org/3/movies/get-movie-details -->
    
    <div v-for="movie of moviesStore.safeMovies">
      <router-link :to="{name: 'movie.details', params: {id: movie.id}}">
        <div>
          <img style="width: 300px" :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" alt="" />
        </div>

        <div>
          <div>
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.release_date }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>

  <Pagination
    :page="moviesStore.movies?.page || 1"
    :total-pages="moviesStore.movies?.total_pages || 1"
    @go-to-page="goToPage"
  ></Pagination>
</template>

<script setup lang="ts">
import { useMoviesStore } from '@/stores/movies';
import Pagination from '@/components/Pagination.vue';

const moviesStore = useMoviesStore()

const goToPage = (page: number) => {
  moviesStore.loadMovies(page)
}

if (!moviesStore.movies?.results.length) {
  moviesStore.loadMovies()
}
</script>


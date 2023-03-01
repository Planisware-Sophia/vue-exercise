<template>
  <div>
    <input
      type="text" rel="search" name="search" id="search" v-model="moviesStore.searchQuery" placeholder="Search ..." autocomplete="off"
    />
    <label for="search">
      <SearchCircleIcon></SearchCircleIcon>
    </label>
  </div>
</template>

<script setup lang="ts">
import { SearchCircleIcon } from '@heroicons/vue/solid';
import { useSearch } from '@/logic/useSearch'
import { useMoviesStore } from '@/stores/movies';

const moviesStore = useMoviesStore()

useSearch()
</script>

<style scoped>
  label svg {
    width: 30px
  }
</style>

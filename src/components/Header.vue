<template>
  <header>
    <nav>
      <div>
        <router-link to="/">
          <FilmIcon style="width: 1em; height: 1em;"></FilmIcon>
          Movies
        </router-link>
      </div>
      <div>
        <Search />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { FilmIcon } from '@heroicons/vue/solid'
import Search from '@/components/Search.vue';
</script>

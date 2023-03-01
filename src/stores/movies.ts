import { discoverMovies, searchMovies } from '@/api/movies'
import type { ApiResponse, Movie } from '@/types'
import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
  state: (): {
    movies?: ApiResponse,
    searchQuery: string,
  } => ({
    movies: undefined,
    searchQuery: ''
  }),
  getters: {
    safeMovies: (state): Movie[] => state.movies?.results || []
  },
  actions: {
    loadMovies(page: number = 1) {
      let api: Promise<ApiResponse>

      if (this.searchQuery) {
        api = searchMovies(this.searchQuery, page)
      } else {
        api = discoverMovies(page)
      }

      return api.then(res => {
        this.movies = res
      })
    }
  },
})

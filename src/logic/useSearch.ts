import { useMoviesStore } from "@/stores/movies"
import { watch } from "vue"

export const useSearch = () => {
  let timeout = -1

  const moviesStore = useMoviesStore()

  const handleSearch = () => {
    window.clearTimeout(timeout)
    timeout = window.setTimeout(() => {
      moviesStore.loadMovies()
    }, 500)
  }

  watch(() => moviesStore.searchQuery, handleSearch)
}

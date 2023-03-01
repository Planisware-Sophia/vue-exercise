import type { ApiResponse, Movie } from '@/types'
import axios from 'axios'

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '04068a32aa187ca5c6e91a41c58ce0de',
  },
})

export function searchMovies(query = '', page = 1): Promise<ApiResponse> {
  return tmdb
    .get('/search/movie', {
      params: {
        query,
        page,
        include_adult: false,
      },
    })
    .then(res => res.data as ApiResponse)
}

export function getMovie(id: number): Promise<Movie> {
  return tmdb
    .get(`/movie/${id}`, {
      params: {},
    })
    .then(res => res.data as Movie)
}

export function getMovieRecommendations(id: number): Promise<ApiResponse> {
  return tmdb
    .get(`/movie/${id}/recommendations`, {
      params: {},
    })
    .then(res => res.data as ApiResponse)
}

export function discoverMovies(page = 1): Promise<ApiResponse> {
  return tmdb
    .get('/discover/movie', {
      params: {
        page,
        sort_by: 'popularity.desc',
      },
    })
    .then(res => res.data as ApiResponse)
}

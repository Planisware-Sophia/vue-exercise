export interface Movie {
  id: number
  title: string
  backdrop_path: string
  overview: string
  vote_average: number
  vote_count: number
  release_date: string
  genres?: { id: number; name: string }[]
  recommendations?: Movie[]
}

export interface ApiResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

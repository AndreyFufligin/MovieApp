import {FC, useEffect, useState} from 'react'
import MovieCard from '../MovieCard/MovieCard.tsx'
import {Container, Grid} from '@mui/material'
import {Axios} from '../../axios'
import {useDispatch, useSelector} from 'react-redux'
import {addMovie, selectMovie} from '../../redux/Slices/movieSlice'
import {
  selectFilter,
  selectGenreFilter,
  selectRangeFilter,
} from '../../redux/Slices/movieFilterSlice.tsx'

export interface Movie {
  original_title: string
  overview: string
  title: string
  poster_path: string | null
  release_date: string
  vote_average: number
  id: number
  popularity: number
  genre_ids: number[]
}

const MovieList: FC = () => {
  const [error, setError] = useState<string | null>(null)
  const dispatch = useDispatch() // Подключаем dispatch
  const Filter = useSelector(selectFilter)
  const genreFilter = useSelector(selectGenreFilter)
  const yearRangeFilter = useSelector(selectRangeFilter)

  useEffect(() => {
    const fetchPopularMovies = async (language: string, page: number) => {
      try {
        const response = await Axios.get('movie/popular', {
          params: {
            language,
            page,
          },
        })

        const fetchedMovies = response.data.results

        console.log(response.data.results)
        // Отправка данных в Redux store
        dispatch(addMovie(fetchedMovies))
      } catch (e) {
        setError(e.message)
      }
    }
    fetchPopularMovies('ru-RU', 1)
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  const movies = useSelector(selectMovie)

  // Фильтрация по жанрам
  const filteredMoviesByGenre = movies.filter((movie) => {
    const genres = Object.keys(genreFilter).filter((key) => genreFilter[key])
    if (genres.length === 0) return true // Если нет выбранных жанров, показываем все фильмы

    const genreMap = {
      comedy: 35,
      action: 28,
      drama: 18,
    }

    return genres.some((genre) => movie.genre_ids.includes(genreMap[genre]))
  })

  // Фильтрация по годам
  const filteredMoviesByYear = filteredMoviesByGenre.filter((movie) => {
    const releaseYear = new Date(movie.release_date).getFullYear()
    return (
      releaseYear >= yearRangeFilter[0] && releaseYear <= yearRangeFilter[1]
    )
  })

  // Сортировка фильмов
  const sortedMovies = [...filteredMoviesByYear].sort((a, b) => {
    if (Filter === 'Популярности') {
      return b.popularity - a.popularity
    } else if (Filter === 'Рейтингу') {
      return b.vote_average - a.vote_average
    } else if (Filter === 'Дате выхода') {
      return (
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      )
    }
    return 0 // Если фильтр не выбран, не сортируем
  })

  return (
    <Container sx={{mt: 4, marginTop: '60px'}}>
      <Grid container spacing={4}>
        {sortedMovies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default MovieList
function fetchPopularMovies(arg0: string, arg1: number) {
  throw new Error('Function not implemented.')
}

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import {FC} from 'react'
import {
  setFilterMovie,
  setFilterGenreMovie,
  selectFilter,
  selectGenreFilter,
} from '../../redux/Slices/movieFilterSlice'
import {useDispatch, useSelector} from 'react-redux'

const Genre: FC = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectFilter)
  const genreFilter = useSelector(selectGenreFilter)

  const handleMovieChangeTitle = (e) => {
    dispatch(setFilterMovie(e.target.value)) // Диспатчим в Redux
  }

  const handleMovieChangeGenre = (e) => {
    const {name, checked} = e.target
    dispatch(setFilterGenreMovie({name, checked}))
  }
  return (
    <>
      <FormControl color="info" sx={{m: 1, minWidth: 250}}>
        <InputLabel></InputLabel>
        <Select value={titleFilter} onChange={handleMovieChangeTitle}>
          <MenuItem value="Популярности">Популярности</MenuItem>
          <MenuItem value="Рейтингу">Рейтингу</MenuItem>
          <MenuItem value="Дате выхода">Дате выхода</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'baseline',
        }}
      >
        <Typography variant="subtitle1">Жанры</Typography>
        <FormControlLabel
          control={
            <Checkbox
              name="comedy"
              checked={genreFilter.comedy}
              onChange={handleMovieChangeGenre}
            />
          }
          label="Комедия"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="action"
              checked={genreFilter.action}
              onChange={handleMovieChangeGenre}
            />
          }
          label="Боевик"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="drama"
              checked={genreFilter.drama}
              onChange={handleMovieChangeGenre}
            />
          }
          label="Драма"
        />
      </Box>
    </>
  )
}

export default Genre

import {createSlice} from '@reduxjs/toolkit'
import {Movie} from '../../components/MovieList/MovieList'

const initialState: Movie[] = []
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      return action.payload
    },
  },
})

export const {addMovie} = movieSlice.actions
export const selectMovie = (state) => state.movie
export default movieSlice.reducer

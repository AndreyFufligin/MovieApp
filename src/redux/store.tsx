import {configureStore} from '@reduxjs/toolkit'
import movieFilterSlice from './Slices/movieFilterSlice'
import movieSlice from './Slices/movieSlice'
const store = configureStore({
  reducer: {
    filter: movieFilterSlice,
    movie: movieSlice,
  },
})

export default store

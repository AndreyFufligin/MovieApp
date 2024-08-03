import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  //начальное состояние
  filter: '',
  genre: {
    comedy: false,
    action: false,
    drama: false,
  },
  yearRange: [1980, 2024],
}
//state = initialState
const movieFilterSlice = createSlice({
  name: 'filter', //название редбюсера
  initialState,
  reducers: {
    //функциии для редьюсера filter
    setFilterMovie: (state, action) => {
      state.filter = action.payload
    },
    setFilterGenreMovie: (state, action) => {
      const {name, checked} = action.payload
      state.genre[name] = checked
    },
    setFilterYearMovie: (state, action) => {
      state.yearRange = action.payload
    },
  },
})
//filter/setFilterGenreMovie - action type -создаётся атвтоматически,action creators
console.log(movieFilterSlice.actions)
export const {setFilterMovie, setFilterGenreMovie, setFilterYearMovie} =
  movieFilterSlice.actions //action.type для отрпавки в Store. Обьект action содержит action creators
//функции  селекторы для подписки на состоянии
export const selectFilter = (state) => state.filter.filter
export const selectGenreFilter = (state) => state.filter.genre
export const selectRangeFilter = (state) => state.filter.yearRange

export default movieFilterSlice.reducer //экспорт редбюсера в стор

import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  selectRangeFilter,
  setFilterYearMovie,
} from '../../redux/Slices/movieFilterSlice'

function valuetext(value: number) {
  return `${value}год`
}

const RangeSlider: FC = () => {
  const dispatch = useDispatch()
  const rangeFilter = useSelector(selectRangeFilter)
  const [value, setValue] = React.useState<number[]>([1980, 2024])

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
    dispatch(setFilterYearMovie(newValue as number[]))
  }

  useEffect(() => {
    if (rangeFilter) {
      setValue(rangeFilter)
    }
  }, [rangeFilter])

  return (
    <Box sx={{width: '350px', marginTop: '20px'}}>
      <Slider
        getAriaLabel={() => 'Year range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={1980}
        max={2024}
        step={1}
      />
    </Box>
  )
}

export default RangeSlider

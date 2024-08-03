import {
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import {useState} from 'react'
import styles from './Filter.module.css'

const Filter: React.FC = () => {
  return (
    <>
      <FormControl color="info" className={styles.formControlBox}>
        <Autocomplete />
      </FormControl>
    </>
  )
}

export default Filter

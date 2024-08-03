import {Box, Typography, Drawer, Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import Popular from '../PaginationElemant/Popular'
import Genre from '../PaginationElemant/Genre'
import PaginationBox from '../PaginationElemant/PaginationBox'
import {FC} from 'react'
import RangeSlider from '../PaginationElemant/RangeSlider'
import React from 'react'

const Paginations: FC = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <>
      <MenuIcon
        sx={{marginTop: '60px', color: '#6f7ebe', width: '60px'}}
        onClick={toggleDrawer(true)}
      >
        Фильтры
      </MenuIcon>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: '368px',
            height: '850px',
            padding: '20px',
            marginLeft: '5px',
            border: '1px solid #000',
          }}
        >
          <Popular />
          <Typography sx={{textAlign: 'left'}}>Сортировать по:</Typography>
          <Genre />
          <RangeSlider />
          <PaginationBox />
        </Box>
      </Drawer>
    </>
  )
}

export default Paginations

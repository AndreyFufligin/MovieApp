import {Box, IconButton, Typography} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {FC} from 'react'

const Popular: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '50px',
        }}
      >
        <Typography variant="h6">Фильтры</Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
    </>
  )
}

export default Popular

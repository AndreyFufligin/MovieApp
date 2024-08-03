import {Pagination, PaginationItem, Stack} from '@mui/material'
import {FC} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const PaginationBox: FC = () => {
  return (
    <Stack spacing={2} sx={{marginTop: '350px'}}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
            {...item}
          />
        )}
      />
    </Stack>
  )
}

export default PaginationBox

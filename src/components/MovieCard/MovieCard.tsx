import {Card, Typography} from '@mui/joy'
import {Movie} from '../MovieList/MovieList'
import {FC} from 'react'
import {Button} from '@mui/material'

const placeholderImage = 'https://via.placeholder.com/140x210'

const MovieCard: FC<Movie> = ({
  original_title,
  overview,
  title,
  poster_path,
  release_date,
  vote_average,
}) => {
  return (
    <Card
      color="primary"
      invertedColors={false}
      orientation="vertical"
      size="lg"
      variant="soft"
      sx={{
        maxWidth: 220,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <img
        src={
          `https://image.tmdb.org/t/p/w500${poster_path}` || placeholderImage
        }
      ></img>

      <Typography level="h2" sx={{fontSize: '15px'}}>
        {title}
      </Typography>
      <Button variant="text">Смотреть Описание</Button>
      <Typography level="h4" sx={{fontSize: '13px'}}>
        {release_date}
      </Typography>
      <Typography level="h4" sx={{fontSize: '13px'}}>
        Рейтинг TMDB {Math.round(vote_average * 10) / 10}
      </Typography>
    </Card>
  )
}

export default MovieCard

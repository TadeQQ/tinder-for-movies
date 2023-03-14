import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { MovieList } from '@/components/MovieList/MovieList';
export default function Home() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <header>
        <Typography variant="h4" component="h1">
          Tinder for movies
        </Typography>
      </header>
      <MovieList />
    </Box>
  );
}

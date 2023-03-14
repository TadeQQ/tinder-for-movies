import { MovieCard } from '@/components/Card';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
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
      <MovieCard />
    </Box>
  );
}

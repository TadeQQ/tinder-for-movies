import { useState, useContext } from 'react';
import { MovieContext } from '../../hooks/Context/MovieContext';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
type TouchEventHandler<T extends EventTarget> = (
  event: TouchEvent & {
    target: T;
  }
) => void;

export const MovieList = () => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);
  const { movies, loading, error, acceptMovie, rejectMovie } =
    useContext(MovieContext);
  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
  const lastMovie = currentMovieIndex === movies?.length - 1;

  const handleOnClick = () => {
    if (!dragging) {
      ('in air');
    }
  };
  const handleDragEnd = () => {
    setDragging(false);
    !lastMovie ? handleReject() : 'last movie';
  };
  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (event) => {
    const touch = event.touches[0];
    setPos({ x: touch.clientX, y: touch.clientY });
    setDragging(true);
  };
  const handleTouchMove = () => {
    if (!dragging) {
      ('in air');
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    !lastMovie ? handleReject() : 'last movie';
  };

  const handleAccept = () => {
    const currentMovieId = movies[currentMovieIndex]?.id;
    acceptMovie(currentMovieId);
    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
  };

  const handleReject = () => {
    const currentMovieId = movies[currentMovieIndex]?.id;
    rejectMovie(currentMovieId);
    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      'https://images.unsplash.com/photo-1572700432881-42c60fe8c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      draggable
      onClick={handleOnClick}
      onDragEnd={handleDragEnd}
      onDragStart={() => setDragging(true)}
      ref={elementRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia>
          <img
            alt={movies[currentMovieIndex]?.title}
            src={movies[currentMovieIndex]?.imageURL}
            width={345}
            height={490}
            onError={handleError}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movies[currentMovieIndex]?.title}{' '}
            {movies[currentMovieIndex]?.rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movies[currentMovieIndex]?.summary}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Button
            variant="contained"
            color="success"
            disabled={lastMovie}
            onClick={handleAccept}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            color="error"
            disabled={lastMovie}
            onClick={handleReject}
          >
            Reject
          </Button>
        </CardActions>
        <Typography
          variant="h6"
          component="h1"
          sx={{ display: 'flex', justifyContent: 'center' }}
          color="error"
        >
          SWIPE TO REJECT
        </Typography>
      </Card>
    </div>
  );
};

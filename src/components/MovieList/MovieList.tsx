import { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';

export const MovieList = () => {
  const { movies, loading, error } = useContext(MovieContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  console.log(movies);
  return (
    <>
      MovieList:
      {Array.isArray(movies) &&
        movies?.map((movie) => <div key={movie.id}>{movie.title}</div>)}
    </>
  );
};

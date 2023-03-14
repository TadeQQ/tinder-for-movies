import { useState, useContext } from 'react';
import TinderCard from 'react-tinder-card';
import { MovieContext } from '../../hooks/Context/MovieContext';
import axios from 'axios';
export const MovieList = () => {
  const { movies, loading, error } = useContext(MovieContext);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const handleAccept = () => {
    const currentMovieId = movies[currentMovieIndex]?.id;
    console.log(currentMovieId);
    // if (currentMovieId) {
    //   axios.put(`/recommendations/${currentMovieId}/accept`);
    // }

    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
  };

  const handleReject = () => {
    const currentMovieId = movies[currentMovieIndex]?.id;
    console.log(currentMovieId);
    // if (currentMovieId) {
    //   axios.put(`/recommendations/${currentMovieId}/reject`);
    // }

    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      'https://images.unsplash.com/photo-1572700432881-42c60fe8c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  };

  return (
    <>
      <div key={movies[currentMovieIndex]?.id}>
        <div>
          {movies[currentMovieIndex]?.title} {movies[currentMovieIndex]?.rating}
        </div>
        <img
          alt={movies[currentMovieIndex]?.title}
          src={movies[currentMovieIndex]?.imageURL}
          width={300}
          height={450}
          onError={handleError}
        />
      </div>
      <div>{movies[currentMovieIndex]?.summary}</div>
      <div>
        {currentMovieIndex === movies?.length - 1 ? (
          <button disabled>Accept</button>
        ) : (
          <button onClick={handleAccept}>Accept</button>
        )}
        {currentMovieIndex === movies?.length - 1 ? (
          <button disabled>Reject</button>
        ) : (
          <button onClick={handleReject}>Reject</button>
        )}
      </div>
    </>
  );
};

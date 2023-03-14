import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
interface Movie {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
}

interface MovieContextType {
  movies: Movie[];
  loading: boolean;
  error: string;
}

export const MovieContext = createContext<MovieContextType>({
  movies: [],
  loading: false,
  error: '',
});

interface Props {
  children: ReactNode;
}

export const MovieProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await axios.get('/api/recommendations');
        setMovies(data.recommendations);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movies. Try again!');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};

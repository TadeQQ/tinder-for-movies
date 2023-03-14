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
  status: string;
  acceptMovie: (id: string) => Promise<void>;
  rejectMovie: (id: string) => Promise<void>;
}

export const MovieContext = createContext<MovieContextType>({
  movies: [],
  loading: false,
  error: '',
  status: '',
  acceptMovie: async (id: string) => {},
  rejectMovie: async (id: string) => {},
});

interface Props {
  children: ReactNode;
}

export const MovieProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const acceptMovie = async (id: string) => {
    try {
      await axios.put(`/recommendations/${id}/accepted`);
      setStatus('accepted');
    } catch (error) {
      setError('Failed to accept movie. Try again!');
    } finally {
      setLoading(false);
    }
  };

  const rejectMovie = async (id: string) => {
    try {
      await axios.put(`/recommendations/${id}/rejected`);
      setStatus('rejected');
    } catch (error) {
      setError('Failed to reject movie. Try again!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/recommendations');
        setMovies(data.recommendations);
      } catch (error) {
        setError('Failed to fetch movies. Try again!');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, loading, error, status, acceptMovie, rejectMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};

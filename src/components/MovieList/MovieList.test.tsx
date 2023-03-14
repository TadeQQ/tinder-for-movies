import { render, fireEvent } from '@testing-library/react';
import { MovieContext } from '../../hooks/Context/MovieContext';
import { MovieList } from './MovieList';

describe('MovieList', () => {
  const movies = [
    {
      id: '1',
      title: 'Movie 1',
      imageURL: 'http://example.com/movie1.jpg',
      summary: 'Summary of Movie 1',
      rating: 4,
    },
    {
      id: '2',
      title: 'Movie 2',
      imageURL: 'http://example.com/movie2.jpg',
      summary: 'Summary of Movie 2',
      rating: 5,
    },
  ];
  const acceptMovie = jest.fn();
  const rejectMovie = jest.fn();

  test('renders the first movie', () => {
    const { getByText, getByAltText } = render(
      <MovieContext.Provider
        value={{
          movies,
          loading: false,
          error: '',
          status: '',
          acceptMovie,
          rejectMovie,
        }}
      >
        <MovieList />
      </MovieContext.Provider>
    );
    expect(getByAltText('Movie 1')).toBeInTheDocument();
    expect(getByText('Movie 1 4')).toBeInTheDocument();
    expect(getByText('Summary of Movie 1')).toBeInTheDocument();
  });

  test('clicking the accept button calls acceptMovie', () => {
    const { getByText } = render(
      <MovieContext.Provider
        value={{
          movies,
          loading: false,
          error: '',
          status: '',
          acceptMovie,
          rejectMovie,
        }}
      >
        <MovieList />
      </MovieContext.Provider>
    );

    fireEvent.click(getByText('Accept'));

    expect(acceptMovie).toHaveBeenCalledWith(1);
  });

  test('clicking the reject button calls rejectMovie', () => {
    const { getByText } = render(
      <MovieContext.Provider
        value={{
          movies,
          loading: false,
          error: '',
          acceptMovie,
          rejectMovie,
          status: '',
        }}
      >
        <MovieList />
      </MovieContext.Provider>
    );

    fireEvent.click(getByText('Reject'));

    expect(rejectMovie).toHaveBeenCalledWith(1);
  });
});

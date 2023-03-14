import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MovieProvider, MovieContext } from './MovieContext';

const server = setupServer(
  rest.get('/api/recommendations', (req, res, ctx) => {
    return res(
      ctx.json({
        recommendations: [
          {
            id: '1',
            imageURL:
              'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
            title: 'Avengers: Infinity War',
            summary:
              'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.',
            rating: 8.3,
          },
          {
            id: '2',
            imageURL:
              'https://image.tmdb.org/t/p/w500/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg',
            title: 'Ad Astra',
            summary:
              'An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. He uncovers secrets which challenge the nature of human existence and our place in the cosmos.',
            rating: 6.1,
          },
        ],
      })
    );
  })
);
test('fetches movies and sets them in the context', async () => {
  render(
    <MovieContext.Provider
      value={{
        movies: [],
        loading: true,
        error: '',
        status: '',
        acceptMovie: jest.fn(),
        rejectMovie: jest.fn(),
      }}
    >
      <MovieProvider>
        <div>Test</div>
      </MovieProvider>
    </MovieContext.Provider>
  );

  await waitFor(() => expect(screen.getByText('Test')).toBeInTheDocument());

  expect(screen.getByText('Avengers: Infinity War')).toBeInTheDocument();
  expect(screen.getByText('Ad Astra')).toBeInTheDocument();
});

test('handles fetch error and sets the error in the context', async () => {
  server.use(
    rest.get('/api/recommendations', (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({ message: 'Internal Server Error' })
      );
    })
  );

  render(
    <MovieContext.Provider
      value={{
        movies: [],
        loading: true,
        error: '',
        status: '',
        acceptMovie: jest.fn(),
        rejectMovie: jest.fn(),
      }}
    >
      <MovieProvider>
        <div>Test</div>
      </MovieProvider>
    </MovieContext.Provider>
  );

  await waitFor(() => expect(screen.getByText('Test')).toBeInTheDocument());

  expect(
    screen.getByText('Failed to fetch movies. Try again!')
  ).toBeInTheDocument();
});

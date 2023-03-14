import { rest } from 'msw';
import { Movie } from '@/hooks/Context/MovieContext';

const movies: Movie[] = [
  {
    id: '1',
    imageURL: 'https://image1.jpg',
    title: 'Movie 1',
    summary: 'Summary 1',
    rating: 4.5,
  },
  {
    id: '2',
    imageURL: 'https://image2.jpg',
    title: 'Movie 2',
    summary: 'Summary 2',
    rating: 3.5,
  },
];

export const handlers = [
  rest.get('/api/recommendations', (req, res, ctx) => {
    return res(ctx.json({ recommendations: movies }));
  }),
  rest.put('/api/recommendations/:id/accepted', (req, res, ctx) => {
    const { id } = req.params;
    const movie = movies.find((m) => m.id === id);
    if (movie) {
      status = 'accepted';
      return res(ctx.json(movie));
    } else {
      return res(ctx.status(404));
    }
  }),
  rest.put('/api/recommendations/:id/rejected', (req, res, ctx) => {
    const { id } = req.params;
    const movie = movies.find((m) => m.id === id);
    if (movie) {
      status = 'rejected';
      return res(ctx.json(movie));
    } else {
      return res(ctx.status(404));
    }
  }),
];

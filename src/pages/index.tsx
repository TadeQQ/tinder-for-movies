import { MovieList } from '@/components/MovieList/MovieList';
import { MovieCard } from '@/components/Card';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <header>
        <div>Tinder for movies</div>
      </header>
      <div>
        <MovieCard />
      </div>
    </>
  );
}

import { AppProps } from 'next/app';
import { MovieProvider } from '../components/Context/MovieContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}

export default App;

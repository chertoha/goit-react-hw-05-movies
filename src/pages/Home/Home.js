import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendings } from 'services/movieDatabaseApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendings().then(setMovies).catch(console.log);
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <h1>Tranding today</h1>

      <MoviesList
        movies={movies}
        path={'/movies/'}
        state={{ from: location }}
      />
    </>
  );
};

export default Home;

import MoviesList from 'components/MoviesList';
import StatusListWrapper from 'components/StatusListWrapper';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendings } from 'services/movieDatabaseApi';
import { STATUS } from 'utils/config';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    getTrendings()
      .then(result => {
        // throw new Error('Test Error');
        setStatus(STATUS.RESOLVED);
        setMovies(result);
      })
      .catch(error => {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      });
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <h1>Trending today</h1>

      <StatusListWrapper status={status} error={error}>
        <MoviesList
          movies={movies}
          path={'/movies/'}
          state={{ from: location }}
        />
      </StatusListWrapper>
    </>
  );
};

export default Home;

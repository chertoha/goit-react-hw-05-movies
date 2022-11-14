import Box from 'components/Box';
import MoviesList from 'components/MoviesList';
import StatusListWrapper from 'components/StatusListWrapper';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/movieDatabaseApi';
import { STATUS } from 'utils/config';
import { Field, Button } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    setStatus(STATUS.PENDING);
    searchMovie(query)
      .then(result => {
        // throw new Error('Test Error');
        // console.log(result);
        setStatus(STATUS.RESOLVED);
        setMovies(result);
      })
      .catch(error => {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      });
  }, [query]);

  const onSearch = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    e.target.reset();
    setSearchParams(value === '' ? {} : { query: value });
  };

  return (
    <>
      <Box
        onSubmit={onSearch}
        as="form"
        display="flex"
        alignItems="center"
        height={25}
        pt={5}
        mb={4}
      >
        <Field type="text" name="search" placeholder="Search movie" />
        <Button type="submit">Search</Button>
      </Box>

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

export default Movies;

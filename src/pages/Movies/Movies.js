import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/movieDatabaseApi';
import { STATUS } from 'utils/config';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  //   const [search, setSearch] = useState('');

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    searchMovie(query)
      .then(result => {
        // console.log(result);
        setMovies(result);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [query]);

  const onSearch = e => {
    e.preventDefault();
    // setStatus(STATUS.PENDING);
    const value = e.target.elements.search.value;

    e.target.reset();
    setSearchParams(value === '' ? {} : { query: value });
    // setSearch(search);
    // searchMovie(query)
    //   .then(result => {
    //     // console.log(result);
    //     setStatus(STATUS.RESOLVED);
    //     setMovies(result);
    //   })
    //   .catch(error => {
    //     setStatus(STATUS.REJECTED);
    //     setError(error.message);
    //   });
  };

  //   const onInputChange = e => {
  //     const value = e.target.value;
  //     setSearchParams(value === '' ? {} : { query: value });
  //   };

  console.log(movies);
  return (
    <>
      <form onSubmit={onSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search movie"
          //   onChange={onInputChange}
          //   value={query ?? ''}
        />
        <button type="submit">Search</button>
      </form>

      <MoviesList
        movies={movies}
        path={'/movies/'}
        state={{ from: location }}
      />
    </>
  );
};

export default Movies;

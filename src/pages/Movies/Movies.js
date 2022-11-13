import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/movieDatabaseApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    searchMovie(query)
      .then(result => {
        console.log(result);
        setMovies(result);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(setLoading(false));
  }, [query]);

  const onSearch = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    e.target.reset();
    setSearchParams(value === '' ? {} : { query: value });
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <input type="text" name="search" placeholder="Search movie" />
        <button type="submit">Search</button>
      </form>

      {loading && <div>Loading...</div>}
      {movies ?? (
        <MoviesList
          movies={movies}
          path={'/movies/'}
          state={{ from: location }}
        />
      )}
    </>
  );
};

export default Movies;

import Box from 'components/Box';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { movieDetails } from 'services/movieDatabaseApi';
import { BASE_IMG_URL } from 'utils/config';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieDetails(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }

  console.log(movie);

  const { original_title, overview, genres, release_date } = movie;

  return (
    <>
      <Box>
        <Link>
          <span>arrow-icon-</span>Go back
        </Link>
        <h1 hidden> Movie details</h1>
      </Box>
      <Box display="flex" borderBottom="1px solid" borderColor={'secondaryBgd'}>
        <Box width={200}>
          {/* set plug if no image poster!!!!!!!!! */}
          <img src={BASE_IMG_URL + movie.poster_path} alt="" width="200" />
        </Box>

        <div>
          <h2>
            {original_title} ({new Date()})
          </h2>
          <p>User score: </p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Genres</h3>
          <p>
            {genres.map(({ id, name }, i, arr) =>
              i !== arr.length - 1 ? (
                <span key={id}>{name}, </span>
              ) : (
                <span key={id}>{name}</span>
              )
            )}
          </p>
        </div>
      </Box>
      <Box borderBottom="1px solid" borderColor={'secondaryBgd'}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Box>

      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default MovieDetails;

import Box from 'components/Box';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetails } from 'services/movieDatabaseApi';
import { BASE_IMG_URL } from 'utils/config';
import { GoBackLink, StyledLink } from './MovieDetails.styled';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  useEffect(() => {
    movieDetails(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }

  // console.log(movie);

  const {
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
    vote_count,
  } = movie;

  return (
    <>
      <Box>
        <GoBackLink to={location.state.from}>
          <HiArrowNarrowLeft />
          <span>Go back</span>
        </GoBackLink>
        <h1 hidden> Movie details</h1>
      </Box>
      <Box display="flex" borderBottom="1px solid" borderColor={'secondaryBgd'}>
        <Box width={200}>
          {/* set plug if no image poster!!!!!!!!! */}
          <img src={BASE_IMG_URL + movie.poster_path} alt="" width="200" />
        </Box>

        <Box ml={4}>
          <h2>
            {original_title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>
            Vote/votes : {vote_average.toFixed(1)} / {vote_count}
          </p>

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
        </Box>
      </Box>
      <Box borderBottom="1px solid" borderColor={'secondaryBgd'}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
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

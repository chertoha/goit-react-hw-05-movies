import Box from 'components/Box';
import AdditionalInfo from './AdditionalInfo';
import ReturnLink from 'components/ReturnLink';
import MovieMeta from './MovieMeta';
import MovieImage from 'components/MovieImage';
import imagePlugSrc from 'images/movieCardPlug.jpg';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { movieDetails } from 'services/movieDatabaseApi';
import { BASE_IMG_URL } from 'utils/config';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    movieDetails(movieId)
      .then(setMovie)
      .catch(error => {
        setError(error.message);

        setTimeout(() => {
          navigate('/', { replace: true });
        }, 2000);
      });
  }, [movieId, navigate]);

  if (error) {
    return <h1>Don't play with URL please. It's not funny</h1>;
  }

  if (!movie) {
    return;
  }

  const {
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
    vote_count,
    poster_path,
  } = movie;

  const imageSrc = poster_path ? BASE_IMG_URL + poster_path : imagePlugSrc;

  const locationForBackLink = location.state?.from ?? '/';

  return (
    <>
      <ReturnLink to={locationForBackLink} text="Go back" />

      <h1 hidden> Movie details</h1>

      <Box
        display="flex"
        borderBottom="1px solid"
        borderColor={'secondaryBgd'}
        pb={4}
      >
        <MovieImage src={imageSrc} alt={original_title} width={200} />
        <MovieMeta
          title={original_title}
          date={new Date(release_date).getFullYear()}
          voteAverage={vote_average.toFixed(1)}
          voteCount={vote_count}
          overview={overview}
          genres={genres}
        />
      </Box>

      <AdditionalInfo location={locationForBackLink} />

      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default MovieDetails;

import Box from 'components/Box';
import AdditionalInfo from './AdditionalInfo';
import ReturnLink from 'components/ReturnLink';
import MovieMeta from './MovieMeta';
import MovieImage from 'components/MovieImage';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetails } from 'services/movieDatabaseApi';
import { BASE_IMG_URL } from 'utils/config';
import imagePlugSrc from 'images/movieCardPlug.jpg';

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
    poster_path,
  } = movie;

  const imageSrc = poster_path ? BASE_IMG_URL + poster_path : imagePlugSrc;

  return (
    <>
      <ReturnLink to={location.state?.from ?? '/'} text="Go back" />

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

      <AdditionalInfo />

      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default MovieDetails;

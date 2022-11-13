import Box from 'components/Box';
import MovieImage from 'components/MovieImage';
import defautlAvatar from 'utils/defaultAvatar';
import ActorMeta from './ActorMeta';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieCast } from 'services/movieDatabaseApi';
import { BASE_IMG_URL } from 'utils/config';
import { Item } from './Cast.styled';
import { STATUS } from 'utils/config';
import Loader from 'components/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieCast(movieId)
      .then(result => {
        // throw new Error('Test error');
        setStatus(STATUS.RESOLVED);
        setCast(result);
      })
      .catch(error => {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      });
  }, [movieId]);

  // console.log(cast);

  if (status === STATUS.IDLE) return;

  if (status === STATUS.PENDING) return <Loader />;

  if (status === STATUS.REJECTED)
    return <div>Sorry, something went wrong: {error}</div>;

  if (status === STATUS.RESOLVED) {
    if (cast.length === 0) {
      return <p>We don't have cast information for this movie.</p>;
    }

    return (
      <Box as="ul" pt={5}>
        {cast.map(({ id, gender, name, character, profile_path }) => {
          const imageSrc = profile_path
            ? BASE_IMG_URL + profile_path
            : defautlAvatar(gender);

          return (
            <Item key={id}>
              <MovieImage src={imageSrc} alt={name} width={100} />
              <ActorMeta name={name} character={character} />
            </Item>
          );
        })}
      </Box>
    );
  }
};

export default Cast;

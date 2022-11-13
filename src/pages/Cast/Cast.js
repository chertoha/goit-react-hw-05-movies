import Box from 'components/Box';
import MovieImage from 'components/MovieImage';
import defautlAvatar from 'utils/defaultAvatar';
import ActorMeta from './ActorMeta';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieCast } from 'services/movieDatabaseApi';
import { BASE_IMG_URL } from 'utils/config';
import { Item } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieCast(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  if (!cast) {
    return;
  }

  //   console.log(cast);

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
};

export default Cast;

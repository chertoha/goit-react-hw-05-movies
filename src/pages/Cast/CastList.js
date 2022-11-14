import PropTypes from 'prop-types';
import Box from 'components/Box';
import ActorMeta from './ActorMeta';
import MovieImage from 'components/MovieImage';
import defautlAvatar from 'utils/defaultAvatar';
import { BASE_IMG_URL } from 'utils/config';
import { Item } from './CastList.styled';

const CastList = ({ cast }) => {
  // console.log(cast);

  if (cast.length === 0) {
    return <p>We don't have cast information for this movie.</p>;
  }

  return (
    <Box as="ul" pt={5}>
      {cast.map(
        ({
          credit_id,
          gender = 0,
          name = 'No info',
          character = 'No info',
          profile_path,
        }) => {
          const imageSrc = profile_path
            ? BASE_IMG_URL + profile_path
            : defautlAvatar(gender);

          return (
            <Item key={credit_id}>
              <MovieImage src={imageSrc} alt={name} width={100} />
              <ActorMeta name={name} character={character} />
            </Item>
          );
        }
      )}
    </Box>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      credit_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      gender: PropTypes.number,
    })
  ),
};

export default CastList;

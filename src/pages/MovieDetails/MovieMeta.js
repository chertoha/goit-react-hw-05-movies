import Box from 'components/Box';
import PropTypes from 'prop-types';

const MovieMeta = ({
  title,
  date = null,
  voteAverage = null,
  voteCount = null,
  overview = '',
  genres = null,
}) => {
  return (
    <Box ml={4}>
      <Box as="h2" m={0} mb={5}>
        {title ? `${title} ` : `No title info`}
        {date && `(${date})`}
      </Box>

      {voteAverage && voteCount && (
        <Box m={0} mb={5}>
          Vote/votes : {voteAverage} / {voteCount}
        </Box>
      )}

      {overview && (
        <>
          <Box as="h3" m={0} mb={3}>
            Overview
          </Box>
          <Box as="p" m={0} mb={5}>
            {overview}
          </Box>
        </>
      )}

      {genres && genres.length > 0 && (
        <>
          <Box as="h3" m={0} mb={3}>
            Genres
          </Box>
          <Box as="p" m={0}>
            {genres.map(({ id, name }, i, arr) => (
              <span key={id}>
                {name}
                {i !== arr.length - 1 ? ', ' : ''}
              </span>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

MovieMeta.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  voteAverage: PropTypes.string,
  voteCount: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MovieMeta;

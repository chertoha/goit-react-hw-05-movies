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
      <h2>
        {title ? `${title} ` : `No title info`}
        {date && `(${date})`}
      </h2>

      {voteAverage && voteCount && (
        <p>
          Vote/votes : {voteAverage} / {voteCount}
        </p>
      )}

      {overview && (
        <>
          <h3>Overview</h3>
          <p>{overview}</p>
        </>
      )}

      {genres && (
        <>
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

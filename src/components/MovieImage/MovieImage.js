import PropTypes from 'prop-types';
import Box from 'components/Box';

const MovieImage = ({ src, alt, width }) => {
  return (
    <Box width={width}>
      <img src={src} alt={alt} width={width} />
    </Box>
  );
};

MovieImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
};

export default MovieImage;

import Box from 'components/Box';

const MovieImage = ({ src, alt, width }) => {
  return (
    <Box width={width}>
      <img src={src} alt={alt} width={width} />
    </Box>
  );
};

export default MovieImage;

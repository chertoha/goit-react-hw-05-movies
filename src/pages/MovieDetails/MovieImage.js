import Box from 'components/Box';

const MoviImage = ({ src, alt, width }) => {
  return (
    <Box width={width}>
      <img src={src} alt={alt} width={width} />
    </Box>
  );
};

export default MoviImage;

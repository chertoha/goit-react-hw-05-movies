import Box from 'components/Box';

import { StyledLink } from './MovieDetails.styled';

const AdditionalInfo = () => {
  return (
    <Box borderBottom="1px solid" borderColor={'secondaryBgd'}>
      <Box as="h4" m={0} mt={3} mb={3}>
        Additional information
      </Box>
      <Box as="ul" pb={3}>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </Box>
    </Box>
  );
};

export default AdditionalInfo;

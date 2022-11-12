import Box from 'components/Box';

import { StyledLink } from './MovieDetails.styled';

const AdditionalInfo = () => {
  return (
    <Box borderBottom="1px solid" borderColor={'secondaryBgd'}>
      <h4>Additional information</h4>
      <ul>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
    </Box>
  );
};

export default AdditionalInfo;

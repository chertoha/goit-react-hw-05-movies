import Box from 'components/Box';
import PropTypes from 'prop-types';
import { GoBackLink } from 'pages/MovieDetails/MovieDetails.styled';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const ReturnLink = ({ to, text = '' }) => {
  return (
    <Box pb={2}>
      <GoBackLink to={to}>
        <HiArrowNarrowLeft />
        <Box as="span" ml={2}>
          {text}
        </Box>
      </GoBackLink>
    </Box>
  );
};

ReturnLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  text: PropTypes.string,
};

export default ReturnLink;

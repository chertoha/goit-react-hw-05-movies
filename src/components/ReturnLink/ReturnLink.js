import Box from 'components/Box';
import PropTypes from 'prop-types';
import { GoBackLink } from 'pages/MovieDetails/MovieDetails.styled';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const ReturnLink = ({ to, text = '' }) => {
  return (
    <Box>
      <GoBackLink to={to}>
        <HiArrowNarrowLeft />
        <span>{text}</span>
      </GoBackLink>
    </Box>
  );
};

ReturnLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  text: PropTypes.string,
};

export default ReturnLink;

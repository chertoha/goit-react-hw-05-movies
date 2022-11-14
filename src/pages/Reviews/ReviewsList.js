import Box from 'components/Box';
import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <Box as="ul" pt={4}>
      {reviews.map(({ id, author = 'No info', content = 'No content' }) => (
        <li key={id}>
          <Box as="h4" m={0} mb={2}>
            Author: {author}{' '}
          </Box>
          <Box as="p" m={0} mb={5}>
            {content}
          </Box>
        </li>
      ))}
    </Box>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired
  ),
};

export default ReviewsList;

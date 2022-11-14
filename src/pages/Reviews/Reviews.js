import ReviewsList from './ReviewsList';
import StatusListWrapper from 'components/StatusListWrapper';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'services/movieDatabaseApi';
import { STATUS } from 'utils/config';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieReviews(movieId)
      .then(result => {
        // throw new Error('Test error');
        setStatus(STATUS.RESOLVED);
        setReviews(result);
      })
      .catch(error => {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      });
  }, [movieId]);

  return (
    <StatusListWrapper status={status} error={error}>
      <ReviewsList reviews={reviews} />
    </StatusListWrapper>
  );
};

export default Reviews;

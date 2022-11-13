import Loader from 'components/Loader';
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

  console.log(reviews);

  if (status === STATUS.IDLE) return;

  if (status === STATUS.PENDING) return <Loader />;

  if (status === STATUS.REJECTED)
    return <div>Sorry, something went wrong: {error}</div>;

  if (status === STATUS.RESOLVED) {
    if (reviews.length === 0) {
      return <p>We don't have any reviews for this movie.</p>;
    }

    return (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author} </h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;

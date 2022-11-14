import CastList from './CastList';
import StatusListWrapper from 'components/StatusListWrapper';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieCast } from 'services/movieDatabaseApi';
import { STATUS } from 'utils/config';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieCast(movieId)
      .then(result => {
        // throw new Error('Test error');
        setStatus(STATUS.RESOLVED);
        setCast(result);
      })
      .catch(error => {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      });
  }, [movieId]);

  // console.log(cast);

  return (
    <StatusListWrapper status={status} error={error}>
      <CastList cast={cast} />
    </StatusListWrapper>
  );
};

export default Cast;

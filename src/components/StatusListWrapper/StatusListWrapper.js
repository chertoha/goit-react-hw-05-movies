import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { STATUS } from 'utils/config';

const StatusListWrapper = ({ status, error, children }) => {
  if (status === STATUS.IDLE) return;

  if (status === STATUS.PENDING) return <Loader />;

  if (status === STATUS.REJECTED)
    return <div>Sorry, something went wrong: {error}</div>;

  if (status === STATUS.RESOLVED) {
    return <>{children}</>;
  }
};

StatusListWrapper.propTypes = {
  status: PropTypes.oneOf([
    STATUS.IDLE,
    STATUS.PENDING,
    STATUS.REJECTED,
    STATUS.RESOLVED,
  ]).isRequired,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default StatusListWrapper;

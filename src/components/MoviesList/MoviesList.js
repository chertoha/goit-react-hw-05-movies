import PropTypes from 'prop-types';
import { StyledLink, List, Item } from './MoviesList.styled';

const MoviesList = ({ movies, path, state }) => {
  if (movies.length === 0) {
    return <p>Sorry, We found nothing. </p>;
  }

  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <StyledLink to={path + id} state={state}>
              {title}
            </StyledLink>
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  path: PropTypes.string.isRequired,
  state: PropTypes.shape({
    from: PropTypes.object.isRequired,
  }),
};

export default MoviesList;

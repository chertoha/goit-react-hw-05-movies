import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendings } from 'services/movieDatabaseApi';
import { StyledLink, List, Item } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendings().then(setMovies).catch(console.log);
  }, []);

  if (!movies) {
    return;
  }

  return (
    <>
      <h1>Tranding today</h1>
      <List>
        {movies.map(({ id, title }) => {
          return (
            <Item key={id}>
              <StyledLink to={'/movies/' + id} state={{ from: location }}>
                {title}
              </StyledLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default Home;

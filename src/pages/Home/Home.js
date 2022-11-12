import Box from 'components/Box';
import { useState, useEffect } from 'react';
import { getTrendings } from 'services/movieDatabaseApi';
import { StyledLink, List, Item } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
              <StyledLink to={'/movies/' + id}>{title}</StyledLink>
            </Item>
          );
        })}
      </List>
    </>
    // <div>Trendingd Today <Link to="/movies/1313">movie link</Link></div>
  );
};

export default Home;

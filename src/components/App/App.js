import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

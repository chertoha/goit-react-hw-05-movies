import Layout from 'components/Layout';
import Home from 'pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;

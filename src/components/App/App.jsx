import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Layout from 'components/Layout';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/> }>
        <Route index element={<div>Trending Today <Link to="/movies/1313">movie link</Link></div>} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<div>Movies/:movieId <br/> Aditional info <Link to="cast">Cast</Link> <Link to="reviews">Reviews</Link> <Outlet/> </div>} >
          <Route path="cast" element={ <div>Cast</div>} />
          <Route path="reviews" element={ <div>Reviews</div>} />
        </Route>
        
      </Route>
    </Routes>
  )
};

export default App;
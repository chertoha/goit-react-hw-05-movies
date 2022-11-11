import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/> }>
        <Route index element={<Home/>} />
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
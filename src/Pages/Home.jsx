import Box from 'components/Box';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendings} from 'services/movieDatabaseApi';

const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getTrendings().then(setMovies).catch(console.log);
    },[])

    return (
        <Box as="main">
            <h1>Tranding today</h1>
            <ul>
                {movies.map(movie => {
                    return (<li key={ movie.id}><Link>{ movie.title}</Link></li>)
                    
                })}
            </ul>
        </Box>
        // <div>Trendingd Today <Link to="/movies/1313">movie link</Link></div>
    );
}

export default Home;
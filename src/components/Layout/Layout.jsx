import Box from 'components/Box';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <Box as="span"> 
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            
            
            
            <Outlet />
        </Box>
    )
}

export default Layout;
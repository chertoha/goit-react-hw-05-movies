import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import { NavItem, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <Box>
      <Box as="header" p={5} boxShadow={'secondary'}>
        <Box as="ul" m={0} p={0} display="flex">
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/movies">Movies</StyledLink>{' '}
          </NavItem>
        </Box>
      </Box>
      <Box as="main" pl={5} pt={3}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

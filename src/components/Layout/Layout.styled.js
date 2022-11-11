import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled('li')`
  margin-right: ${p => p.theme.space[4]};

  :last-child {
    margin-right: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.xl};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: 500;

  transition: ${p => p.theme.transitions.default};

  :hover {
    color: ${p => p.theme.colors.hovered};
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  margin-right: ${p => p.theme.space[4]};

  :last-child {
    margin-right: 0;
  }
`;

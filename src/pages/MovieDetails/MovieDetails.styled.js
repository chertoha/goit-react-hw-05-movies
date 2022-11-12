import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: block;

  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[4]};

  text-decoration: none;
  color: ${p => p.theme.colors.link};
  font-weight: ${p => p.theme.fontWeights.bolder};

  transition: ${p => p.theme.transitions.default};
  :hover {
    color: ${p => p.theme.colors.accent};
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;

  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[3]};

  text-decoration: none;
  color: ${p => p.theme.colors.link};
  font-weight: ${p => p.theme.fontWeights.bolder};

  transition: ${p => p.theme.transitions.default};
  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

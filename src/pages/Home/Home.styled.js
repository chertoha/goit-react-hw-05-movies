import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled('ul')`
  list-style: decimal;
  font-size: ${p => p.theme.fontSizes.lg};
`;

export const Item = styled('li')`
  margin-bottom: ${p => p.theme.space[2]};

  :last-child {
    margin-bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.link};

  transition: ${p => p.theme.transitions.default};
  padding-left: ${p => p.theme.space[3]};

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

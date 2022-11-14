import styled from 'styled-components';

export const Field = styled('input')`
  border: none;
  background-color: transparent;
  padding: 0;

  height: 100%;
  margin-right: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[3]};
  padding-right: ${p => p.theme.space[3]};

  border: 1px solid ${p => p.theme.colors.secondaryText};
  border-radius: ${p => p.theme.radii.borderRadius};
`;

export const Button = styled('button')`
  border: none;
  background-color: transparent;
  padding: 0;

  height: 100%;
  padding-left: ${p => p.theme.space[3]};
  padding-right: ${p => p.theme.space[3]};
  cursor: pointer;

  border: 1px solid ${p => p.theme.colors.secondaryText};
  border-radius: ${p => p.theme.radii.borderRadius};

  transition: ${p => p.theme.transitions.default};
  :hover {
    background-color: ${p => p.theme.colors.secondaryBgd};
  }
`;

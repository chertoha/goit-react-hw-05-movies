import styled from 'styled-components';

export const Item = styled('li')`
  display: flex;

  margin-bottom: ${p => p.theme.space[5]};

  :last-child {
    margin-bottom: 0;
  }
`;

export const Meta = styled('div')`
  margin-left: ${p => p.theme.space[4]};
`;

export const Paragraph = styled('p')`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.lg};

  margin-bottom: ${p => p.theme.space[3]};

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const Label = styled('span')`
  font-weight: ${p => p.theme.fontWeights.bolder};
`;

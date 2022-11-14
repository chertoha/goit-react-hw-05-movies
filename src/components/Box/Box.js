import styled from 'styled-components';
import {
  typography,
  space,
  color,
  shadow,
  layout,
  border,
  flexbox,
} from 'styled-system';

const Box = styled('div')(
  typography,
  space,
  color,
  shadow,
  layout,
  border,
  flexbox
);

export default Box;

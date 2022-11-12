import styled from 'styled-components';
import {
  typography,
  space,
  color,
  shadow,
  layout,
  border,
} from 'styled-system';

const Box = styled('div')(typography, space, color, shadow, layout, border);

export default Box;

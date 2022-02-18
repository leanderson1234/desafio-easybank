import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';

const TypographyStyle = styled(Toolbar)`
  &&& {
    background: ${(props) => props.theme.colors.neutras.White};
    z-index: 1;
  }
`;

export default TypographyStyle;

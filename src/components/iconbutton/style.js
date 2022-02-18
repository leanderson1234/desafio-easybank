import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

const IconButtonStyle = styled(IconButton)`
  &&& {
    color: ${(props) =>
      props.theme.colors.neutras[props.color] || props.theme.colors.primary[props.color]};
    display: none;
    @media (max-width: 500px) {
      display: block;
    }
  }
`;

export default IconButtonStyle;

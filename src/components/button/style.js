import { Button } from '@material-ui/core';
import styled from 'styled-components';

const ButtonStyle = styled(Button)`
  &&& {
    background: ${(props) =>
      ` linear-gradient(90deg,${props.theme.colors.primary.LimeGreen},${props.theme.colors.primary.BrightCyan})`};
    border-radius: 20px;
    font-size: 10px;
    width: 150px;
    padding: 12px;
    color: ${(props) => props.theme.colors.neutras.White};
  }
`;

export default ButtonStyle;

import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const TypographyStyle = styled(Typography)`
  &&& {
    margin-right: ${(props) => (props.theme.margin ? props.theme.margin[props.mr] : '')};
    color: ${(props) =>
      props.theme.colors.neutras[props.color] || props.theme.colors.primary[props.color]};
    font-size: ${(props) => props.theme.Fontsize[props.fontS]};
    font-family: ${(props) => props.theme.Family};
    margin-bottom: ${(props) => `${props.marginBottom}px`};
    width: ${(props) => (props.width ? `${props.width}%` : '')};
  }
  ${(props) =>
    props.menu
      ? `
  &:hover {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 0px;
    border-bottom-width: 4px;
    border-image-source: linear-gradient(90deg,${props.theme.colors.primary.LimeGreen},${props.theme.colors.primary.BrightCyan});

  }
  `
      : ''}
`;

export default TypographyStyle;

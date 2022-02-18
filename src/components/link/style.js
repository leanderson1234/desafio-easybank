import { Link } from '@material-ui/core';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
  &&& {
    color: ${(props) =>
      props.theme.colors.neutras[props.bgColor] || props.theme.colors.primary[props.bgColor]};
    cursor: pointer;
    font-family: ${(props) => props.theme.Family};
    margin-right: 20px;
    min-width: max-content;
  }
  ${(props) =>
    `
    &&& {
    &:hover {
      color: ${props.theme.colors.primary.DarkBlue};

    }

  }
  `}
  ${(props) =>
    props.hoversecondary
      ? `
      &&& {
        &:hover {
      color:${props.theme.colors.primary.LimeGreen}
    }
    padding: 8px;
  }`
      : ''}
`;

export default LinkStyle;

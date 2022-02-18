import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
  padding:0;
  margin:0;
  vertical-align:baseline;
  list-style:none;
  border:0
}
body {
 font-size: ${(props) => props.theme.Fontsize.default};
 color: ${(props) => props.theme.colors.neutras.LightGrayishBlue};
}

`;

export default GlobalStyle;

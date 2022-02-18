import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const GridStyle = styled(Grid)`
  &&& {
    background: ${(props) =>
      props.theme.colors.neutras[props.bgColor] || props.theme.colors.primary[props.bgColor]};

    padding-left: ${(props) => `${props.paddingLeft}px`};
    padding-right: ${(props) => `${props.paddingRight}px`};
    padding-top: ${(props) => `${props.paddingTop}px`};
    padding-bottom: ${(props) => `${props.paddingBottom}px`};
    width: ${(props) => (props.width ? `${props.width}%` : '')};
    z-index: ${(props) => (props.zindex ? `${props.zindex}` : '')};

    ${(props) => (props.showMenu ? `display:none` : '')}
    @media (max-width: 500px) {
      text-align: ${(props) => props.textalign || ''};
      .containerMobile {
        ${(props) => (props.showMenu ? `top: 0px;  ` : 'display:none')}
      }
      .mobilec1 {
        text-align: center;
      }
      .mobilecenter {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .mobilecentercopy {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 20px;
      }
      .mobilefootermenu {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0;
        padding-top: 20px;
      }
      .mobileText {
        width: 100%;
        padding-right: 0;
        padding-top: 30px;
      }
      .mobileCard {
        width: 90%;
        padding-right: 0;
        padding-top: 30px;
      }
      .menumobilenone {
        display: none;
      }
    }
  }
  @media (min-width: 501px) and (max-width: 1440px) {
    &&& {
      .mobilefootermenu {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0;
      }
    }
  }
  ${(props) =>
    props.bgimageintro
      ? `background-image: url('/images/bg-intro-desktop.svg');
    width: 98vh;
    height: 100vh;
    top: -190px;
    right: 0;
    position: absolute;
    background-repeat: no-repeat;
    z-index: 1;
    @media(max-width: 500px) {
        background-image: url('/images/bg-intro-mobile.svg');
        top: -10px;
        right: 0px;
        background-size: cover;
        background-color: ${
          props.theme.colors.neutras[props.bgColor] || props.theme.colors.primary[props.bgColor]
        };

  }
  }

    `
      : ''}
  ${(props) =>
    props.bgimagemockups
      ? `background-image: url('/images/image-mockups.png');
    width: 98vh;
    height: 110vh;
    top: -60px;
    right: 0;
    position: absolute;
    background-repeat: no-repeat;
    z-index: 10;
    @media(max-width: 500px) {
      background-image: url('/images/image-mockups.png');
      position: relative;
      top: -150px;
      background-size: contain;
      max-height: 520px;
  }
  @media (min-width: 501px) and (max-width: 1440px) {
    &&& {
      height: 120vh;
      max-width: 45%;
      background-size: contain;
      background-position-x: 106px;
    }`
      : ''}
`;

export default GridStyle;

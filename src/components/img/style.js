import styled from 'styled-components';

const ImgStyle = styled.img`
  position: ${({ position }) => (position ? `${position}` : '')};
  top: ${({ top }) => (top ? `${top}px` : '')};
  right: ${({ right }) => (right ? `${right}px` : '')};
  z-index: ${({ zindex }) => (zindex ? `${zindex}` : '')};
  width: ${({ width }) => (width ? `${width}%` : '')};
  /* min-height: ${({ height }) => (height ? `${height}px` : '')}; */
  height: max-content;
  max-height: 200px;
  padding-right: ${({ paddingRight }) => (paddingRight ? `${paddingRight}px` : '')};
`;

export default ImgStyle;

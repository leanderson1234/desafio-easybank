import Proptypes from 'prop-types';
import ImgStyle from './style';

const Img = ({ position, top, right, zindex, src, alt, width, height, paddingRight }) => (
  <ImgStyle
    src={src}
    alt={alt}
    position={position}
    top={top}
    right={right}
    zindex={zindex}
    width={width}
    height={height}
    paddingRight={paddingRight}
  />
);

const { string, number } = Proptypes;
Img.propTypes = {
  position: string,
  top: number,
  right: number,
  zindex: number,
  src: string,
  alt: string,
  width: number,
  height: number,
  paddingRight: number,
};

Img.defaultProps = {
  position: '',
  top: '',
  right: '',
  zindex: 0,
  src: '',
  alt: ' ',
  width: '',
  height: '',
  paddingRight: '',
};

export default Img;

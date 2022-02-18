import PropTypes from 'prop-types';
import TypographyStyle from './style';

const Typography = ({ children, mr, variant, fontS, marginBottom, color, width, menu }) => (
  <TypographyStyle
    mr={mr}
    variant={variant}
    fontS={fontS}
    marginBottom={marginBottom}
    color={color}
    width={width}
    menu={menu}
  >
    {children}
  </TypographyStyle>
);

const { string, number, bool } = PropTypes;

Typography.propTypes = {
  mr: string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  variant: string.isRequired,
  fontS: number,
  marginBottom: number,
  color: string,
  width: number,
  menu: bool,
};
Typography.defaultProps = {
  mr: '',
  fontS: 'default',
  marginBottom: '',
  color: 'GrayishBlue',
  width: '',
  menu: false,
};

export default Typography;

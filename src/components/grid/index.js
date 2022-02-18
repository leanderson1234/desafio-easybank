import PropTypes from 'prop-types';
import GridStyle from './style';

const Grid = ({
  children,
  item,
  alignItems,
  container,
  sm,
  md,
  lg,
  xs,
  xl,
  justify,
  bgColor,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  spacing,
  direction,
  width,
  bgimageintro,
  bgimagemockups,
  zindex,
  className,
  showMenu,
  textalign,
}) => (
  <GridStyle
    item={item}
    alignItems={alignItems}
    container={container}
    sm={sm}
    md={md}
    lg={lg}
    xs={xs}
    xl={xl}
    justify={justify}
    bgColor={bgColor}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    spacing={spacing}
    direction={direction}
    width={width}
    bgimageintro={bgimageintro}
    bgimagemockups={bgimagemockups}
    zindex={zindex}
    className={className}
    showMenu={showMenu}
    textalign={textalign}
  >
    {children}
  </GridStyle>
);
const { string, bool, number } = PropTypes;

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  item: bool,
  alignItems: string,
  container: bool,
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
  justify: string,
  bgColor: string,
  paddingLeft: number,
  paddingRight: number,
  paddingTop: number,
  paddingBottom: number,
  spacing: number,
  direction: string,
  width: number,
  bgimageintro: bool,
  bgimagemockups: bool,
  zindex: number,
  className: string,
  showMenu: bool,
  textalign: string,
};

Grid.defaultProps = {
  item: '',
  children: '',
  alignItems: '',
  container: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  justify: '',
  bgColor: '',
  paddingLeft: '',
  spacing: '',
  paddingRight: '',
  paddingTop: '',
  paddingBottom: '',
  direction: '',
  width: '',
  bgimageintro: false,
  bgimagemockups: false,
  zindex: '',
  className: '',
  showMenu: '',
  textalign: '',
};

export default Grid;

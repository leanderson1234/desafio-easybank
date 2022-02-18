import PropTypes from 'prop-types';
import AppBarStyle from './style';

const AppBar = ({ children, position }) => (
  <AppBarStyle position={position}>{children}</AppBarStyle>
);
const { string } = PropTypes;

AppBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  position: string,
};

AppBar.defaultProps = {
  position: '',
};

export default AppBar;

import PropTypes from 'prop-types';
import ToolbarStyle from './style';

const Toolbar = ({ children }) => <ToolbarStyle>{children}</ToolbarStyle>;

const { element } = PropTypes;

Toolbar.propTypes = {
  children: element.isRequired,
};

Toolbar.defaultProps = {};

export default Toolbar;

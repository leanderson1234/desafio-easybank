import PropTypes from 'prop-types';
import ButtonStyle from './style';

const Button = ({ children }) => <ButtonStyle>{children}</ButtonStyle>;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

Button.defaultProps = {};

export default Button;

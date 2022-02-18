import PropTypes from 'prop-types';
import IconButtonStyle from './style';

const IconButton = ({ children, className, color, onClick }) => {
  return (
    <IconButtonStyle className={className} color={color} onClick={onClick}>
      {children}
    </IconButtonStyle>
  );
};
const { string, func } = PropTypes;

IconButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,

  className: string,
  color: string,
  onClick: func,
};

IconButton.defaultProps = {
  className: '',
  color: '',
  onClick: '',
};

export default IconButton;

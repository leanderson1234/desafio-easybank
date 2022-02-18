import PropTypes from 'prop-types';
import LinkStyle from './style';

const Link = ({ children, underline, hoversecondary, color }) => (
  <LinkStyle underline={underline} hoversecondary={hoversecondary} color={color}>
    {children}
  </LinkStyle>
);

const { string, bool } = PropTypes;

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  underline: string,
  hoversecondary: bool,
  color: string,
};
Link.defaultProps = {
  underline: 'none',
  hoversecondary: false,
  color: '',
};

export default Link;

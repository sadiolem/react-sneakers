import PropTypes from 'prop-types';
import styles from './BaseButton.module.scss';

function BaseButton({ children, onClick }) {
  return (
    <button type="button" className={styles['base-button']} onClick={onClick}>{children}</button>
  );
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default BaseButton;

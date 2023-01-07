import PropTypes from 'prop-types';
import styles from './BaseButton.module.scss';

function BaseButton({ children }) {
  return (
    <button type="button" className={styles['base-button']}>{children}</button>
  );
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseButton;

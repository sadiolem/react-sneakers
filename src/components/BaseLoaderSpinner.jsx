import PropTypes from 'prop-types';
import styles from './BaseLoaderSpinner.module.scss';

function BaseLoaderSpinner({ size, width }) {
  return (
    <div className={styles['base-loader-spinner']} style={{ width: `${size}px`, height: `${size}px` }}>
      <div style={{ borderWidth: `${width}px` }} />
      <div style={{ borderWidth: `${width}px` }} />
      <div style={{ borderWidth: `${width}px` }} />
      <div style={{ borderWidth: `${width}px` }} />
    </div>
  );
}

BaseLoaderSpinner.defaultProps = {
  size: 32,
  width: 4,
};

BaseLoaderSpinner.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
};

export default BaseLoaderSpinner;

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Drawer.module.scss';

function Drawer({ children, isOpen, close }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();

        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={isOpen ? `${styles.drawer} ${styles.opened}` : styles.drawer}>
      {isOpen && (
        <div className={styles.overlay} onClick={close} />
      )}

      <div className={styles['drawer-content']}>
        {children}
      </div>
    </div>
  );
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default Drawer;

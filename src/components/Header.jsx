import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav';

function Header({ updateItem }) {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src="./img/logo.svg" width={245} height={41} alt="react sneakers logo" />
      </NavLink>

      <HeaderNav updateItem={updateItem} />
    </header>
  );
}

Header.propTypes = {
  updateItem: PropTypes.func.isRequired,
};

export default Header;

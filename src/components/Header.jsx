import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src="./img/logo.svg" width={245} height={41} alt="react sneakers logo" />
      </NavLink>

      <HeaderNav />
    </header>
  );
}

export default Header;

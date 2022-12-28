import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.scss';

function HeaderNav() {
  return (
    <div className={styles['header-nav']}>
      <button type="button" className={styles['cart-button']}>
        <img src="./img/ui-icons/FluentCart.svg" height={24} width={24} alt="cart" />
        0 Руб.
      </button>

      <NavLink to="/favorites">
        <img src="./img/ui-icons/FluentHeartOutlined.svg" height={24} width={24} alt="favorites" />
      </NavLink>
      <NavLink to="/profile">
        <img src="./img/ui-icons/FluentClipboardBulletList.svg" height={24} width={24} alt="profile" />
      </NavLink>

      {/* <Drawer /> */}
    </div>
  );
}

export default HeaderNav;

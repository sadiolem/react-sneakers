import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './HeaderNav.module.scss';
import Drawer from './Drawer';

function HeaderNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={styles['header-nav']}>
      <div className={styles['nav-list']}>
        <NavLink to="/">
          <img src="./img/ui-icons/FluentHome.svg" height={24} width={24} alt="home" />
        </NavLink>

        <button type="button" className={styles['cart-button']} onClick={openDrawer}>
          <img src="./img/ui-icons/FluentCart.svg" height={24} width={24} alt="cart" />
          0 Руб.
        </button>

        <NavLink to="/favorites">
          <img src="./img/ui-icons/FluentHeartOutlined.svg" height={24} width={24} alt="favorites" />
        </NavLink>
        <NavLink to="/profile">
          <img src="./img/ui-icons/FluentClipboardBulletList.svg" height={24} width={24} alt="profile" />
        </NavLink>
      </div>

      <Drawer isOpen={isDrawerOpen} close={closeDrawer}>
        <h1>Корзина</h1>
      </Drawer>
    </div>
  );
}

export default HeaderNav;

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderNav.module.scss';
import Drawer from './Drawer';
import Cart from './Cart';

function HeaderNav({ updateItem }) {
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
      </div>

      <Drawer isOpen={isDrawerOpen} close={closeDrawer}>
        <Cart updateItem={updateItem} />
      </Drawer>
    </div>
  );
}

HeaderNav.propTypes = {
  updateItem: PropTypes.func.isRequired,
};

export default HeaderNav;

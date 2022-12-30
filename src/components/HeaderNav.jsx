import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderNav.module.scss';
import Drawer from './Drawer';
import Cart from './Cart';
import AppContext from '../context.js';

function HeaderNav({ updateItem }) {
  const { cartItems } = useContext(AppContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [totalCartPrice, setTotalCartPrice] = useState();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    setTotalCartPrice(cartItems.reduce((acc, prev) => acc + prev.price, 0));
  });

  return (
    <div className={styles['header-nav']}>
      <div className={styles['nav-list']}>
        <NavLink to="/">
          <img src="./img/ui-icons/FluentHome.svg" height={24} width={24} alt="home" />
        </NavLink>

        <button type="button" className={styles['cart-button']} onClick={openDrawer}>
          <img src="./img/ui-icons/FluentCart.svg" height={24} width={24} alt="cart" />
          {`${totalCartPrice} Руб.`}
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

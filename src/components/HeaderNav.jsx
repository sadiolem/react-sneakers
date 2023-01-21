import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import priceFormat from '../utils/priceFormat';
import styles from './HeaderNav.module.scss';
import Drawer from './Drawer';
import Cart from './Cart';
import AppContext from '../context';

function HeaderNav({ updateItem }) {
  const { cartItems, isSignedIn } = useContext(AppContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [totalCartPrice, setTotalCartPrice] = useState();
  const navigate = useNavigate();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    setTotalCartPrice(cartItems.reduce((acc, prev) => acc + prev.price, 0));
  });

  const handleLogout = () => {
    localStorage.removeItem('AuthToken');
    navigate('/signin');
  };

  return (
    <div className={styles['header-nav']}>
      <div className={styles['nav-list']}>
        <NavLink to="/">
          <img src="./img/ui-icons/FluentHome.svg" height={24} width={24} alt="home" />
        </NavLink>

        <button type="button" className={styles['cart-button']} onClick={openDrawer}>
          <img src="./img/ui-icons/FluentCart.svg" height={24} width={24} alt="cart" />
          {`${priceFormat(totalCartPrice)}`}
        </button>

        <NavLink to="/favorites">
          <img src="./img/ui-icons/FluentHeartOutlined.svg" height={24} width={24} alt="favorites" />
        </NavLink>

        {
          isSignedIn
            && (
            <button type="button" onClick={handleLogout}>
              Sign out
            </button>
            )
        }
      </div>

      <Drawer isOpen={isDrawerOpen} close={closeDrawer}>
        <Cart updateItem={updateItem} totalCartPrice={totalCartPrice} close={closeDrawer} />
      </Drawer>
    </div>
  );
}

HeaderNav.propTypes = {
  updateItem: PropTypes.func.isRequired,
};

export default HeaderNav;

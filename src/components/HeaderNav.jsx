import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.scss';

function HeaderNav() {
  return (
    <div className={styles['header-nav']}>
      <button type="button" className={styles['cart-button']}>
        <img src="./img/ui-icons/EmojiFlatShoppingCart.svg" height={20} width={20} alt="cart" />
        1205 Руб.
      </button>

      <NavLink to="/favorites">
        <img src="./img/ui-icons/EmojiFlatWhiteHeart.svg" height={20} width={20} alt="favorites" />
      </NavLink>
      <NavLink to="/profile">
        <img src="./img/ui-icons/EmojiFlatShoppingBags.svg" height={20} width={20} alt="profile" />
      </NavLink>
    </div>
  );
}

export default HeaderNav;

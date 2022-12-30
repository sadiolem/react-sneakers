import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../context';
import styles from './Cart.module.scss';
import CartCardsList from './CartCardsList';

function Cart({ updateItem }) {
  const { cartItems } = useContext(AppContext);

  return (
    <div className={styles.cart}>
      <h1 className={styles['cart-title']}>Корзина</h1>
      <CartCardsList
        cards={cartItems}
        updateItem={updateItem}
      />
    </div>
  );
}

Cart.propTypes = {
  updateItem: PropTypes.func.isRequired,
};

export default Cart;

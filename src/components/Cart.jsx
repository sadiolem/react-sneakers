import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../context';
import styles from './Cart.module.scss';
import CartCardsList from './CartCardsList';
import CartEmpty from './CartEmpty';
import CartSummary from './CartSummary';

function Cart({ updateItem, totalCartPrice }) {
  const { cartItems } = useContext(AppContext);

  return (
    <div className={styles.cart}>
      <h1 className={styles['cart-title']}>Корзина</h1>
      {
        cartItems.length
          ? (
            <>
              <CartCardsList
                cards={cartItems}
                updateItem={updateItem}
              />

              <CartSummary totalCartPrice={totalCartPrice} />
            </>
          )
          : <CartEmpty />
      }
    </div>
  );
}

Cart.defaultProps = {
  totalCartPrice: 0,
};

Cart.propTypes = {
  updateItem: PropTypes.func.isRequired,
  totalCartPrice: PropTypes.number,
};

export default Cart;

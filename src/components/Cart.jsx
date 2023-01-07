import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../context';
import styles from './Cart.module.scss';
import CartCardsList from './CartCardsList';
import CartEmpty from './CartEmpty';
import CartSummary from './CartSummary';

function Cart({ updateItem, totalCartPrice, close }) {
  const { cartItems } = useContext(AppContext);

  return (
    <div className={styles.cart}>
      <div className={styles['title-wrapper']}>
        <h1 className={styles['cart-title']}>Корзина</h1>

        <button type="button" aria-label="close cart" onClick={close}>
          <img src="./img/ui-icons/FluentDismissSquare.svg" width={32} height={32} alt="" />
        </button>
      </div>

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
          : <CartEmpty close={close} />
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
  close: PropTypes.func.isRequired,
};

export default Cart;

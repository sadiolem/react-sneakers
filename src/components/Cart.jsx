import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import api from '../api';
import styles from './Cart.module.scss';
import CartCardsList from './CartCardsList';

function Cart({ isOpen }) {
  // TODO refactor call api to get items only once and pass it to the components
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    const data = await api.goods.getGoods();

    if (data) {
      const addedItems = data.filter((item) => item.isAdded);
      setCartItems(addedItems);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    fetchData();
  }, [isOpen]);

  const handleItemUpdate = async (item) => {
    await api.goods.updateGood(item.id, item);
    fetchData();
  };

  return (
    <div className={styles.cart}>
      <h1 className={styles['cart-title']}>Корзина</h1>
      <CartCardsList
        cards={cartItems}
        updateItem={handleItemUpdate}
      />
    </div>
  );
}

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Cart;

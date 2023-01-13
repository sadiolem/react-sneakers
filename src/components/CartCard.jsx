import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import priceFormat from '../utils/priceFormat.js';
import styles from './CartCard.module.scss';

function CartCard({ item, updateItem }) {
  const [isAdded, setIsAdded] = useState(item.isAdded);

  function handleRemoveClick() {
    setIsAdded(false);
  }

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    updateItem({ ...item, isAdded });
  }, [isAdded]);

  return (
    <div className={styles['cart-card']}>
      <img src={`./img/goods/${item.image}`} width={70} height={70} className={styles.image} alt="" />
      <div className={styles['info-wrapper']}>
        <p>{item.name}</p>
        <p className={styles.price}>{`${priceFormat(item.price)}`}</p>
      </div>
      <button type="button" aria-label="remove from cart" onClick={handleRemoveClick}>
        <img src="./img/ui-icons/FluentDelete.svg" height={24} width={24} alt="" />
      </button>
    </div>
  );
}

CartCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    isFavorite: PropTypes.bool,
    isAdded: PropTypes.bool,
  }).isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default CartCard;

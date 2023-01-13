import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import BaseLoaderSpinner from './BaseLoaderSpinner';

function Card({ item, addToFavorite, addToCart }) {
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [addToFavoriteLoading, setAddToFavoriteLoading] = useState(false);

  function getFavoriteIcon() {
    return item.isFavorite ? 'FluentHeart' : 'FluentHeartEmpty';
  }

  function getAddIcon() {
    return item.isAdded ? 'FluentCartFilled' : 'FluentCart';
  }

  useEffect(() => {
    setAddToCartLoading(false);
  }, [item.isAdded]);

  useEffect(() => {
    setAddToFavoriteLoading(false);
  }, [item.isFavorite]);

  function handleFavoriteClick() {
    setAddToFavoriteLoading(true);
    addToFavorite({ ...item, isFavorite: !item.isFavorite });
  }

  function handleAddClick() {
    setAddToCartLoading(true);
    addToCart({ ...item, isAdded: !item.isAdded });
  }

  return (
    <div className={styles.card}>
      <div className={styles['card-inner-wrapper']}>
        <button
          type="button"
          disabled={addToFavoriteLoading}
          className={styles['favorite-btn']}
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
        >
          {
            addToFavoriteLoading
              ? <BaseLoaderSpinner size={20} width={2} />
              : <img src={`./img/ui-icons/${getFavoriteIcon()}.svg`} width={32} height={32} alt="" />
          }
        </button>

        <img src={`./img/goods/${item.image}`} height={112} className={styles.img} alt="" />

        <p className={styles.name}>{item.name}</p>

        <div className={styles['price-and-cart-btn']}>
          <div className={styles['price-wrapper']}>
            <p className={styles['price-title']}>Цена:</p>
            <p className={styles.price}>{`${item.price} руб.`}</p>
          </div>

          <button
            type="button"
            disabled={addToCartLoading}
            className={styles['cart-btn']}
            aria-label="add to shopping cart"
            onClick={handleAddClick}
          >
            {
              addToCartLoading
                ? <BaseLoaderSpinner size={20} width={2} />
                : <img src={`./img/ui-icons/${getAddIcon()}.svg`} width={32} height={32} alt="" />
            }
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    isFavorite: PropTypes.bool,
    isAdded: PropTypes.bool,
  }).isRequired,
  addToFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Card;

import PropTypes from 'prop-types';
import styles from './Card.module.scss';

function Card({ item, updateItem }) {
  function getFavoriteIcon() {
    return item.isFavorite ? 'FluentHeart' : 'FluentHeartEmpty';
  }

  function getAddIcon() {
    return item.isAdded ? 'FluentCartFilled' : 'FluentCart';
  }

  function handleFavoriteClick() {
    updateItem({ ...item, isFavorite: !item.isFavorite });
  }

  function handleAddClick() {
    updateItem({ ...item, isAdded: !item.isAdded });
  }

  return (
    <div className={styles.card}>
      <div className={styles['card-inner-wrapper']}>
        <button
          type="button"
          className={styles['favorite-btn']}
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
        >
          <img src={`./img/ui-icons/${getFavoriteIcon()}.svg`} width={32} height={32} alt="" />
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
            className={styles['cart-btn']}
            aria-label="add to shopping cart"
            onClick={handleAddClick}
          >
            <img src={`./img/ui-icons/${getAddIcon()}.svg`} width={32} height={32} alt="" />
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
  updateItem: PropTypes.func.isRequired,
};

export default Card;

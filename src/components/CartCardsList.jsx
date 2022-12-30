import PropTypes from 'prop-types';
import styles from './CartCardsList.module.scss';
import CartCard from './CartCard';

function CartCardsList({ cards, updateItem }) {
  return (
    <div className={styles['cart-cards-list']}>
      { cards.map((card) => (
        <CartCard
          key={card.id}
          item={card}
          updateItem={updateItem}
        />
      )) }
    </div>
  );
}

CartCardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default CartCardsList;

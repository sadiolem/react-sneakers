import PropTypes from 'prop-types';
import styles from './CardsList.module.scss';
import Card from './Card';

function CardsList({ cards, addToFavorite, addToCart }) {
  return (
    <div className={styles['cards-list']}>
      { cards.map((card) => (
        <Card
          key={card.id}
          item={card}
          addToFavorite={addToFavorite}
          addToCart={addToCart}
        />
      )) }
    </div>
  );
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addToFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CardsList;

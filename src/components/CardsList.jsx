import PropTypes from 'prop-types';
import styles from './CardsList.module.scss';
import Card from './Card';

function CardsList({ cards, updateItem }) {
  return (
    <div className={styles['cards-list']}>
      { cards.map((card) => (
        <Card
          key={card.id}
          item={card}
          updateItem={updateItem}
        />
      )) }
    </div>
  );
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default CardsList;

import PropTypes from 'prop-types';
import styles from './CardsList.module.scss';
import Card from './Card';

function CardsList({ cards }) {
  return (
    <div className={styles['cards-list']}>
      { cards.map((item) => <Card key={item.id} item={item} />) }
    </div>
  );
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CardsList;

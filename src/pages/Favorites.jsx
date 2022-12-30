import { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context';
import styles from './Favorites.module.scss';
import CardsList from '../components/CardsList';

function Favorites({ updateItem }) {
  const { favoriteItems } = useContext(AppContext);

  return (
    <main className={styles.favorites}>
      <h1 className={styles['favorites-title']}>Мои закладки</h1>
      <CardsList
        cards={favoriteItems}
        updateItem={updateItem}
      />
    </main>
  );
}

Favorites.propTypes = {
  updateItem: PropTypes.func.isRequired,
};

export default Favorites;

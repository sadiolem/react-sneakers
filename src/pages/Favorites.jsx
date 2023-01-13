import { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context';
import styles from './Favorites.module.scss';
import CardsList from '../components/CardsList';
import FavoritesEmpty from '../components/FavoritesEmpty';
import CardSkeleton from '../components/CardSkeleton';

function Favorites({ addToFavorite, addToCart }) {
  const { loading } = useContext(AppContext);
  const { favoriteItems } = useContext(AppContext);

  return (
    <main className={styles.favorites}>
      <h1 className={styles['favorites-title']}>Мои закладки</h1>

      {
        loading && (
        <div className={styles['skeleton-cards-list']}>
          {
            [...Array(12)].map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <CardSkeleton key={index} />
            ))
          }
        </div>
        )
      }

      {
        !loading && favoriteItems.length
          ? (
            <CardsList
              cards={favoriteItems}
              addToFavorite={addToFavorite}
              addToCart={addToCart}
            />
          )
          : <FavoritesEmpty />
      }

    </main>
  );
}

Favorites.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Favorites;

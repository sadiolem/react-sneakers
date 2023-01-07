import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../context';
import styles from './Home.module.scss';
import CardsList from '../components/CardsList';
import CardSkeleton from '../components/CardSkeleton';

function Home({ updateItem }) {
  const { goods } = useContext(AppContext);
  const { loading } = useContext(AppContext);

  return (
    <main className={styles.home}>
      <div>
        <h1 className={styles['home-title']}>Все кроссовки</h1>
      </div>

      {
        loading
          ? (
            <div className={styles['skeleton-cards-list']}>
              {
                 [...Array(12)].map((_, index) => (
                   // eslint-disable-next-line react/no-array-index-key
                   <CardSkeleton key={index} />
                 ))
              }
            </div>
          )
          : (
            <CardsList
              cards={goods}
              updateItem={updateItem}
            />
          )
      }
    </main>
  );
}

Home.propTypes = {
  updateItem: PropTypes.func.isRequired,
};

export default Home;

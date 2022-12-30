import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../context';
import styles from './Home.module.scss';
import CardsList from '../components/CardsList';

function Home({ updateItem }) {
  const { goods } = useContext(AppContext);
  return (
    <main className={styles.home}>
      <div>
        <h1 className={styles['home-title']}>Все кроссовки</h1>
      </div>
      <CardsList
        cards={goods}
        updateItem={updateItem}
      />
    </main>
  );
}

Home.propTypes = {
  updateItem: PropTypes.func.isRequired,
};

export default Home;

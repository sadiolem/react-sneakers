import styles from './Home.module.scss';
import CardsList from '../components/CardsList';

function Home() {
  return (
    <main className={styles.home}>
      <CardsList />
    </main>
  );
}

export default Home;

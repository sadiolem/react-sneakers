import { useEffect, useState } from 'react';
import api from '../api';
import styles from './Home.module.scss';
import CardsList from '../components/CardsList';

function Home() {
  const [goods, setGoods] = useState([]);

  const fetchData = async () => {
    const data = await api.goods.getGoods();
    if (data) setGoods(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.home}>
      <CardsList cards={goods} />
    </main>
  );
}

export default Home;

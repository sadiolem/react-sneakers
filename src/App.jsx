import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  useEffect, useState, useMemo,
} from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import api from './api';
import AppContext from './context';

function App() {
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    sortBy: '',
    order: '',
  });
  const [goods, setGoods] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchAppData = async () => {
    const data = await api.goods.getGoods(searchParams);

    if (data) {
      setGoods(data);
      // ONE ENDPOINT FOR ALL ITEMS ONLY BECAUSE OF MOCKAPI
      setFavoriteItems(data.filter((item) => item.isFavorite));
      setCartItems(data.filter((item) => item.isAdded));
    }
  };

  useEffect(() => {
    async function initialLoading() {
      setLoading(true);
      await fetchAppData();
      setLoading(false);
    }

    initialLoading();
  }, []);

  const fetchHomeItems = async () => {
    const data = await api.goods.getGoods(searchParams);

    if (data) {
      setGoods(data);
    }
  };

  useEffect(() => {
    fetchHomeItems();
  }, [searchParams]);

  const sortItems = async (sortValue) => {
    if (sortValue) {
      setSearchParams((prev) => ({
        ...prev,
        sortBy: 'price',
        order: sortValue,
      }));
    } else {
      setSearchParams((prev) => ({
        ...prev,
        sortBy: '',
        order: '',
      }));
    }
  };

  const addToFavorite = async (item) => {
    await api.goods.updateGood(item.id, item);
    fetchAppData();
  };

  const addToCart = async (item) => {
    await api.goods.updateGood(item.id, item);
    fetchAppData();
  };

  const contextValue = useMemo(() => (
    {
      loading, goods, favoriteItems, cartItems,
    }
  ), [loading, goods, favoriteItems, cartItems]);

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <div className={styles.wrapper}>
          <Header updateItem={addToCart} />
          <Routes>
            <Route path="/" element={<Home sortItems={sortItems} addToFavorite={addToFavorite} addToCart={addToCart} />} />
            <Route path="/favorites" element={<Favorites addToFavorite={addToFavorite} addToCart={addToCart} />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

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
  const [goods, setGoods] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    const data = await api.goods.getGoods();

    if (data) {
      setGoods(data);
      setFavoriteItems(data.filter((item) => item.isFavorite));
      setCartItems(data.filter((item) => item.isAdded));
    }
  };

  useEffect(() => {
    async function initialLoading() {
      setLoading(true);
      await fetchData();
      setLoading(false);
    }

    initialLoading();
  }, []);

  const handleItemUpdate = async (item) => {
    await api.goods.updateGood(item.id, item);
    fetchData();
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
          <Header updateItem={handleItemUpdate} />
          <Routes>
            <Route path="/" element={<Home updateItem={handleItemUpdate} />} />
            <Route path="/favorites" element={<Favorites updateItem={handleItemUpdate} />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

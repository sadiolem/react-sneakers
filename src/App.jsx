import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import {
  useEffect, useState, useMemo, useRef,
} from 'react';
import { debounce } from 'lodash';
import api from './api';
import AppContext from './context';
import '../firebase-config';
import styles from './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const [loading, setLoading] = useState(false);
  // const [searchParams, setSearchParams] = useState({
  //   sortBy: '',
  //   order: '',
  //   name: '',
  // });
  const [goods, setGoods] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem('AuthToken'));
  const navigate = useNavigate();
  const initialRender = useRef(true);
  const searchParams = {
    sortBy: '',
    order: '',
    name: '',
  };

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
    if (!isSignedIn) return;

    async function initialLoading() {
      setLoading(true);
      await fetchAppData();
      setLoading(false);
    }

    initialLoading();
  }, []);

  useEffect(() => {
    setIsSignedIn(localStorage.getItem('AuthToken'));
  });

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    } else {
      navigate('/signin');
    }
  }, [isSignedIn]);

  const fetchHomeItems = async () => {
    setLoading(true);
    const data = await api.goods.getGoods(searchParams);
    setLoading(false);

    if (data) {
      setGoods(data);
    }
  };

  const sortItems = async (sortValue) => {
    if (sortValue) {
      searchParams.sortBy = 'price';
      searchParams.order = sortValue;
    } else {
      searchParams.sortBy = '';
      searchParams.order = '';
    }

    fetchHomeItems();
  };

  const searchItems = async (searchValue) => {
    searchParams.name = searchValue;
    fetchHomeItems();
  };

  const debouncedEventHandler = useMemo(
    () => debounce(searchItems, 300),
    [],
  );

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
      loading, goods, favoriteItems, cartItems, isSignedIn,
    }
  ), [loading, goods, favoriteItems, cartItems, isSignedIn]);

  return (
    <AppContext.Provider value={contextValue}>
      <div className={styles.wrapper}>
        {
          isSignedIn
            && <Header updateItem={addToCart} />
        }

        <Routes>
          <Route
            path="/"
            element={(
              <Home
                sortItems={sortItems}
                searchItems={debouncedEventHandler}
                addToFavorite={addToFavorite}
                addToCart={addToCart}
              />
              )}
          />

          <Route path="/favorites" element={<Favorites addToFavorite={addToFavorite} addToCart={addToCart} />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

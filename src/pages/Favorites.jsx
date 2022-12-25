import { useState, useEffect } from 'react';
import api from '../api/index.js';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    const data = await api.goods.getFavorites();
    if (data) setFavorites(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {JSON.stringify(favorites)}
    </main>
  );
}

export default Favorites;

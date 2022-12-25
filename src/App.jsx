import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

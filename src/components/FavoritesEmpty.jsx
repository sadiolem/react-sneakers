import { useNavigate } from 'react-router-dom';
import styles from './FavoritesEmpty.module.scss';
import BaseButton from './BaseButton';

function FavoritesEmpty() {
  const navigate = useNavigate();

  const handleBackBtnClick = () => {
    navigate('/');
  };

  return (
    <div className={styles['favorites-empty']}>
      <img src="./img/ui-icons/EmojiFlatWorriedFace.svg" width={70} height={70} alt="" />

      <h2 className={styles.title}>Закладок нет</h2>
      <p className={styles.subtitle}>Вы ничего не добавляли в закладки</p>

      <BaseButton className={styles['back-btn']} onClick={handleBackBtnClick}>
        <img src="./img/ui-icons/FluentArrowLeft.svg" width={20} height={20} alt="" />
        Вернуться назад
      </BaseButton>
    </div>
  );
}

export default FavoritesEmpty;

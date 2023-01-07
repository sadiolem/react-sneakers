import PropTypes from 'prop-types';
import styles from './CartEmpty.module.scss';
import BaseButton from './BaseButton';

function CartEmpty({ close }) {
  return (
    <div className={styles['cart-empty']}>
      <img src="./img/empty-cart.png" width={120} height={120} className={styles.img} alt="" />

      <h2 className={styles.title}>Корзина пустая</h2>
      <p className={styles.subtitle}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>

      <BaseButton className={styles['back-btn']} onClick={close}>Вернуться назад</BaseButton>
    </div>
  );
}

CartEmpty.propTypes = {
  close: PropTypes.func.isRequired,
};

export default CartEmpty;

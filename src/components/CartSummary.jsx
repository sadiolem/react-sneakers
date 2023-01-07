import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './CartSummary.module.scss';
import BaseButton from './BaseButton';

function CartSummary({ totalCartPrice }) {
  const tax = 0.05;
  const [taxFromTotalPrice, setTaxFromTotalPrice] = useState(0);
  const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);

  useEffect(() => {
    setTaxFromTotalPrice(totalCartPrice * tax);
    setTotalPriceWithTax(totalCartPrice + totalCartPrice * tax);
  }, [totalCartPrice]);

  return (
    <div className={styles['cart-summary']}>
      <div className={styles['info-row']}>
        <span className={styles['info-title']}>{`Налог ${tax * 100}%`}</span>
        <span className={styles['info-value']}>{`${taxFromTotalPrice.toFixed(2)} руб.`}</span>
      </div>
      <div className={styles['info-row']}>
        <span className={styles['info-title']}>Итого:</span>
        <span className={styles['info-value']}>{`${totalPriceWithTax.toFixed(2)} руб.`}</span>
      </div>
      <BaseButton className={styles['order-btn']}>Оформить заказ</BaseButton>
    </div>
  );
}

CartSummary.propTypes = {
  totalCartPrice: PropTypes.number.isRequired,
};

export default CartSummary;

import styles from './CardSkeleton.module.scss';

function CardSkeleton() {
  return (
    <div className={styles['card-skeleton']}>
      <div className={`${styles.img} ${styles.skeleton}`} />

      <div className={`${styles.name} ${styles.skeleton}`} />
      <div className={`${styles.name} ${styles.skeleton}`} />

      <div className={styles['price-and-cart-btn']}>
        <div className={`${styles['price-wrapper']} ${styles.skeleton}`} />

        <div className={`${styles['cart-btn']} ${styles.skeleton}`} />
      </div>
    </div>
  );
}

export default CardSkeleton;

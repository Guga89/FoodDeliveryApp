import { useDispatch } from 'react-redux';
import { clearAll, closeCart } from '../reduxStore/cartSlice';
import CartItem from './cart-item';
import styles from './cart-items.module.css';

const CartItems = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearAll());
    dispatch(closeCart());
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.item}>Item</h4>
        <h4 className={styles.qty}>Qty</h4>
        <h4 className={styles.price}>Price</h4>
      </div>
      <div className={styles.itemsList}>
        {items.map((item) => (
          <CartItem item={item} key={item._id} />
        ))}
      </div>
      <div className={styles.footer}>
        <button className="btn btn-primary">Confirm address to continue</button>
        <button className={styles.clearAllBtn} onClick={clearCart}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default CartItems;

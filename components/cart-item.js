import styles from './cart-item.module.css';
import useIcons from '../utils/useIcons';
import { useDispatch } from 'react-redux';
import {
  cartAddItem,
  cartReduceItemCount,
  cartRemoveItem,
} from '../reduxStore/cartSlice';

const CartItem = (props) => {
  const { item } = props;
  const { trash } = useIcons();
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(cartAddItem(item));
  };
  const reduceItem = () => {
    dispatch(cartReduceItemCount(item));
  };
  const removeItem = () => {
    dispatch(cartRemoveItem(item));
  };

  return (
    <div className={styles.card}>
      <div className={styles.row1}>
        <div>
          <img src={item.img} alt="" />
          <div className={styles.titleGroup}>
            <h5>{item.name}</h5>
            <p>${item.price}</p>
          </div>
        </div>
        <div className={styles.counterContainer}>
          <div className={styles.upDown}>
            <div className={styles.up} onClick={addItem}>
              &#8249;
            </div>
            <div className={styles.down} onClick={reduceItem}>
              &#8250;
            </div>
          </div>
          <div className={styles.qty}>{item.quantity}</div>
        </div>

        <h4 className={styles.price}>${item.price * item.quantity}</h4>
      </div>
      <div className={styles.row2}>
        <input type="text" name="note" id="note" value={item.note} />
        <button onClick={removeItem}>{trash.icon}</button>
      </div>
    </div>
  );
};

export default CartItem;

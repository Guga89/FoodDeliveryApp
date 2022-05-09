import styles from './cart-item.module.css';
import useIcons from '../utils/useIcons';

const CartItem = (props) => {
  const { item } = props;
  const { trash } = useIcons();
  return (
    <div className={styles.card}>
      <div className={styles.row1}>
        <div>
          <img src={item.img} alt="" />
          <div className={styles.titleGroup}>
            <h5>{item.name}</h5>
            <p>${item.price}.99</p>
          </div>
        </div>
        <input className={styles.qty} value={item.qty} type="text" />
        <h4 className={styles.price}>${item.price * item.qty}</h4>
      </div>
      <div className={styles.row2}>
        <input type="text" name="note" id="note" value={item.note} />
        <button>{trash.icon}</button>
      </div>
    </div>
  );
};

export default CartItem;

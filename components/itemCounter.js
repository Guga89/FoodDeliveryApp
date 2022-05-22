import { useDispatch, useSelector } from 'react-redux';
import styles from './itemCounter.module.css';
import { cartAddItem, cartReduceItemCount } from '../reduxStore/cartSlice';

const ItemCounter = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentItem = cartItems.filter((item) => {
    return item._id === props.item._id;
  });
  let quantity;
  if (currentItem[0] !== undefined) {
    quantity = currentItem[0].quantity;
  } else {
    quantity = 0;
  }
  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cartAddItem(props.item));
  };

  const reduceFromCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cartReduceItemCount(props.item));
  };

  return (
    <>
      {!quantity && (
        <button className={styles.addButton} onClick={addToCart}>
          Add
        </button>
      )}

      {quantity > 0 && (
        <div
          className={styles.container}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.minus} onClick={reduceFromCart}>
            -
          </div>
          <div className={styles.counter}>{currentItem[0].quantity}</div>
          <div className={styles.plus} onClick={addToCart}>
            +
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCounter;

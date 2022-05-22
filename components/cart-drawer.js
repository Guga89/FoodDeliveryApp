import styles from './cart-drawer.module.css';
import { useState } from 'react';
import CartItems from './cart-items';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../reduxStore/cartSlice';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const priceSum = useSelector((state) => state.cart.priceSum);

  const [orderType, setOrderType] = useState('dineIn');

  const formHandler = (e) => {
    e.preventDefault();
    // console.log(orderType);
  };

  const closeCartHander = (e) => {
    e.stopPropagation();
    dispatch(closeCart());
  };

  return (
    <div className={styles.container} onClick={closeCartHander}>
      <div
        className={styles.cart}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.orderSum}>
          <h2>Order</h2>
          <h3> Total price - ${priceSum}</h3>
        </div>
        <form className={styles.cartForm} onSubmit={formHandler}>
          <div className={styles.orderTypeGroup}>
            <label
              className={
                orderType === 'dineIn'
                  ? styles.inputLabel + ' ' + styles.active
                  : styles.inputLabel
              }
              htmlFor="dineIn"
            >
              Dine In
              <input
                type="radio"
                name="orderType"
                id="dineIn"
                value={'dineIn'}
                onChange={(e) => setOrderType(e.target.value)}
                defaultChecked
              />
            </label>
            <label
              className={
                orderType === 'toGo'
                  ? styles.inputLabel + ' ' + styles.active
                  : styles.inputLabel
              }
              htmlFor="toGo"
            >
              To Go
              <input
                type="radio"
                name="orderType"
                id="toGo"
                value={'toGo'}
                onChange={(e) => setOrderType(e.target.value)}
              />
            </label>
            <label
              className={
                orderType === 'delivery'
                  ? styles.inputLabel + ' ' + styles.active
                  : styles.inputLabel
              }
              htmlFor="delivery"
            >
              Delivery
              <input
                onChange={(e) => setOrderType(e.target.value)}
                type="radio"
                name="orderType"
                id="delivery"
                value={'delivery'}
              />
            </label>
          </div>
          <CartItems items={cartItems} />
          {/* <button>Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default CartDrawer;

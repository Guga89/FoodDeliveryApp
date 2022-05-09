import styles from './cart-drawer.module.css';
import { useState } from 'react';
import CartItems from './cart-items';
import { useDispatch } from 'react-redux';
import { closeCart } from '../reduxStore/cartSlice';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([
    {
      _id: '13123',
      name: 'Baba Ganoush',
      price: 23,
      note: 'Medium spicy',
      qty: 2,
      img: 'https://images.unsplash.com/photo-1627308595127-d9acf19107ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    },
    {
      _id: '13321',
      name: 'Baba Ganoush',
      price: 23,
      note: 'Medium spicy',
      qty: 2,
      img: 'https://images.unsplash.com/photo-1627308595127-d9acf19107ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    },
  ]);

  const [orderType, setOrderType] = useState('dineIn');

  const formHandler = (e) => {
    e.preventDefault();
    // console.log(orderType);
  };

  const closeCartHander = () => {
    dispatch(closeCart());
  };
  return (
    <div className={styles.container} onClick={closeCartHander}>
      <div className={styles.cart}>
        <h2>Order #00001</h2>
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

import useIcons from '../utils/useIcons';
import styles from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../reduxStore/cartSlice';

const Header = (props) => {
  const { search, cart } = useIcons();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const date = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const dispatch = useDispatch();

  const cartOpenHandler = () => {
    dispatch(openCart());
  };

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{props.pageTitle}</h1>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.input_container}>
            <i>{search.icon}</i>
            <input type="text" placeholder="Search for goodies..." />
          </div>
          <button
            className={
              cartItems.length === 0
                ? 'btn btn-secondary' + ' ' + styles.cartDisabled
                : 'btn btn-secondary' + ' ' + styles.cart
            }
            onClick={cartOpenHandler}
          >
            {cart.icon}
            {cartItems.length > 0 && (
              <span className={styles.priceSum}>{cartItems.length}</span>
            )}
          </button>
        </div>
      </div>
      {props.children}
    </header>
  );
};

export default Header;

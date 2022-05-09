import Head from 'next/head';
import Navbar from './navbar';
import CartDrawer from './cart-drawer';
import styles from './layout.module.css';
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const cartActivate = useSelector((state) => state.cart.cartIsOpen);

  return (
    <>
      <Head>
        <title>Gugs kitchen</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.content}>{props.children}</main>
        {cartActivate && <CartDrawer />}
        {/* <Shipping /> */}
        {/* <Payment /> */}
      </div>
    </>
  );
};

export default Layout;

import Head from 'next/head';
import Navbar from './navbar';
import styles from './layout.module.css';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Gugs kitchen</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.content}>{props.children}</main>
        {/* <CartDrawer /> */}
        {/* <Shipping /> */}
        {/* <Payment /> */}
      </div>
    </>
  );
};

export default Layout;

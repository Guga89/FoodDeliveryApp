import Header from '../components/header';
import Layout from '../components/layout';
import styles from './home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Header pageTitle="Welcome to Guga's" />
        <p>
          Here will be some carousel, bonus cards, new products, discounts etc
          information
        </p>
      </div>
    </Layout>
  );
}

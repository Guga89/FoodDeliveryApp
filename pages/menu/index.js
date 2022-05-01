import MenuList from '../../components/menu-list';
import Header from '../../components/header';
import Layout from '../../components/layout';
import styles from './menu.module.css';
import { useState } from 'react';
import Categories from '../../components/categories';
import { MongoClient } from 'mongodb';

const Menu = (props) => {
  const [filter, setFilter] = useState('all');

  const { items } = props;

  return (
    <Layout>
      <div className={styles.container}>
        <Header pageTitle="Menu">
          <Categories
            filter={filter}
            changeFilter={(filter) => {
              setFilter(filter);
            }}
          />
        </Header>
        <MenuList items={items} filter={filter} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:DDumc4GoOlnhokjL@cluster2022.rom5c.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'
  );
  const db = client.db();

  const data = await db.collection('products').find({}).toArray();
  const dataParsed = await data;

  // const data = await fetch('http://localhost:8000/menuList');
  // const dataParsed = await data.json();

  return {
    props: {
      items: JSON.parse(JSON.stringify(dataParsed)),
    },
  };
}
export default Menu;

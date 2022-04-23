import MenuList from '../../components/menu-list';
import Header from '../../components/header';
import Layout from '../../components/layout';
import styles from './menu.module.css';
import { useState } from 'react';
import Categories from '../../components/categories';

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
  const data = await fetch('http://localhost:8000/menuList');
  const dataParsed = await data.json();

  return {
    props: {
      items: dataParsed,
    },
  };
}
export default Menu;

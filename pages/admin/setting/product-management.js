import SettingsLayout from '../../../components/admin/settingsLayout';
import AdminLayout from '../../../components/admin/adminLayout';
import Categories from '../../../components/categories';
import MenuList from '../../../components/menu-list';
import { useState } from 'react';
import styles from './product-management.module.css';

const ProductManagement = (props) => {
  const [filter, setFilter] = useState('all');

  return (
    <AdminLayout>
      <SettingsLayout>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Categories
              filter={filter}
              changeFilter={(filter) => {
                setFilter(filter);
              }}
            />
          </div>
          <MenuList items={props.items} filter={filter} admin={true} />
        </div>
      </SettingsLayout>
    </AdminLayout>
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

export default ProductManagement;

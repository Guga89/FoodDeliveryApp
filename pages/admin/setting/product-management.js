import SettingsLayout from '../../../components/admin/settingsLayout';
import AdminLayout from '../../../components/admin/adminLayout';
import Categories from '../../../components/categories';
import MenuList from '../../../components/menu-list';
import { useState } from 'react';
import styles from './product-management.module.css';
import { MongoClient } from 'mongodb';

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
  const client = await MongoClient.connect(
    'mongodb+srv://admin:DDumc4GoOlnhokjL@cluster2022.rom5c.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'
  );
  const db = client.db();
  const data = await db.collection('products').find({}).toArray();

  return {
    props: {
      items: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default ProductManagement;

import Header from '../../../components/header';
import Layout from '../../../components/layout';
import { MongoClient, ObjectId } from 'mongodb';

// import styles from './menuItem.module.css';

const MenuItem = (props) => {
  const { item } = props;

  return (
    <Layout>
      <Header pageTitle={item.name} />
      <img src={item.img} alt="" width={300} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const itemID = context.params.menuItem;

  const client = await MongoClient.connect(
    'mongodb+srv://admin:DDumc4GoOlnhokjL@cluster2022.rom5c.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'
  );
  const productsCollection = client.db().collection('products');

  const item = await productsCollection.findOne({ _id: new ObjectId(itemID) });

  return {
    props: {
      item: JSON.parse(JSON.stringify(item)),
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:DDumc4GoOlnhokjL@cluster2022.rom5c.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'
  );
  const db = client.db();
  const data = await db.collection('products').find({}).toArray();

  const params = data.map((item) => {
    return {
      params: {
        menuItem: item._id.toString(),
      },
    };
  });

  return {
    paths: params,
    fallback: false,
  };
}
export default MenuItem;

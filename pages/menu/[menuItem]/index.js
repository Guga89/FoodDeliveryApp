import Header from '../../../components/header';
import Layout from '../../../components/layout';
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

async function getData() {
  const res = await fetch('http://localhost:8000/menuList');
  const data = await res.json();
  return data;
}

export async function getStaticProps(context) {
  const itemID = context.params.menuItem;
  const data = await getData();
  const item = data.find((item) => {
    return item.id === itemID;
  });

  return {
    props: {
      item: item,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const params = data.map((item) => {
    return {
      params: {
        menuItem: item.id,
      },
    };
  });
  return {
    paths: params,
    fallback: false,
  };
}
export default MenuItem;

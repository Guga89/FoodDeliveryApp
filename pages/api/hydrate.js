// import { MongoClient } from 'mongodb';

// const handler = async (req, res) => {
//   const client = await MongoClient.connect(
//     'mongodb+srv://admin:DDumc4GoOlnhokjL@cluster2022.rom5c.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'
//   );
//   const db = client.db();

//   const data = await fetch('http://localhost:8000/menuList');
//   const response = await data.json();
//   const productsList = await response;

//   await db.collection('products').insertMany(productsList);

//   client.close();

//   res.send('Successfully hydrated!');
// };

// export default handler;

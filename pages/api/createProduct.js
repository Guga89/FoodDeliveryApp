import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const client = await MongoClient.connect(
      'mongodb+srv://admin:DDumc4GoOlnhokjL@cluster2022.rom5c.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'
    );
    const db = client.db();
    await db.collection('products').insertOne(req.body);

    client.close();

    fetch('http://localhost:8000/menuList', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res.status(200).json({ message: 'Success!', product: req.body }));
  }
};

export default handler;

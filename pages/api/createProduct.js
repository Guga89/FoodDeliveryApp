import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://admin:DDumc4GoOlnhokjL@cluster2022.rom5c.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'
      );
      console.log('DB connected!');
    } catch (err) {
      res.status(500).json({
        err,
        message: 'Something went wrong, could not connect to DB...',
      });
      return;
    }

    try {
      const db = client.db();
      await db.collection('products').insertOne(req.body);
      console.log('Product added!');
      res
        .status(200)
        .json({ message: 'Successfully added!', product: req.body });
    } catch (err) {
      res.status(500).json({
        err,
        message: 'Could not create a product, try again later...',
      });
      return;
    }

    client.close();

    // fetch('http://localhost:8000/menuList', {
    //   method: 'POST',
    //   body: JSON.stringify(req.body),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then(res.status(200).json({ message: 'Success!', product: req.body }));
  }
};

export default handler;

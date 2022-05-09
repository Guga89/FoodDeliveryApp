import { MongoClient, ObjectId } from 'mongodb';

const handler = async (req, res) => {
  const productID = req.query.id;

  const client = await MongoClient.connect(
    'mongodb+srv://admin:DDumc4GoOlnhokjL@cluster2022.rom5c.mongodb.net/foodDeliveryApp?retryWrites=true&w=majority'
  );
  const productsCollection = client.db().collection('products');

  if (req.method === 'GET') {
    const item = await productsCollection.findOne({
      _id: new ObjectId(productID),
    });

    res.status(200).json(item);
    client.close();
  }

  if (req.method === 'PUT') {
    const editedProduct = req.body;
    // const updateProduct = await fetch(
    //   `http://localhost:8000/menuList/${productID}`,
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(editedProduct),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    // const updatedProduct = await updateProduct.json();

    try {
      let data = req.body;
      data = delete data._id;
      const item = await productsCollection.findOneAndReplace(
        {
          _id: new ObjectId(productID),
        },
        { ...data }
      );
      await console.log('from PUT api ', item);
      res.status(200).json({ message: 'Item updated!!!' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Something went wrong, couldn't update the item.." });
      return;
    }

    client.close();
    // res.status(200).send(updatedProduct);
  }

  if (req.method === 'DELETE') {
    try {
      const item = await productsCollection.findOneAndDelete({
        _id: new ObjectId(productID),
      });
      await console.log('from DELETE api ', item);
      res.status(200).json({ message: 'Item deleted!!!' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Something went wrong, couldn't delete the item.." });
      return;
    }

    client.close();
  }
};

export default handler;

const handler = async (req, res) => {
  const productID = req.query.id;

  if (req.method === 'GET') {
    const response = await fetch(`http://localhost:8000/menuList/${productID}`);
    const data = await response.json();
    res.status(200).json(data);
  } else if (req.method === 'PUT') {
    const editedProduct = req.body;
    const updateProduct = await fetch(
      `http://localhost:8000/menuList/${productID}`,
      {
        method: 'PUT',
        body: JSON.stringify(editedProduct),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const updatedProduct = await updateProduct.json();
    res.status(200).send(updatedProduct);
  } else if (req.method === 'DELETE') {
    const deleteProduct = await fetch(
      `http://localhost:8000/menuList/${productID}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const deletedProduct = await deleteProduct.json();
    res.status(200).send(deletedProduct);
  }
};

export default handler;

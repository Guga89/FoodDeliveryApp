import Modal from '../modal';
import styles from './addProductForm.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditProductForm = (props) => {
  const router = useRouter();

  const { name = 'name', price = 1, img = 'img' } = props.product;

  const [productName, setProductName] = useState(name);
  const [productPrice, setProductPrice] = useState(price);
  const [productImg, setProductImg] = useState(img);

  useEffect(() => {
    setProductName(name);
    setProductPrice(price);
    setProductImg(img);
  }, [name, price, img]);

  const editedProduct = {
    ...props.product,
    name: productName,
    price: productPrice,
    img: productImg,
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    props.spinnerToggle(true);

    const res = await fetch(`/api/product/${editedProduct.id}`, {
      method: 'PUT',
      body: JSON.stringify(editedProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    alert(`${data.name} is successfully updated...`);

    props.spinnerToggle(false);
    props.modalHandlerClose();
    router.push('./product-management');
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    props.spinnerToggle(true);
    const confirm = prompt(
      'Type "Y" if you sure you want to delete this product?'
    );

    if (confirm === 'Y') {
      const res = await fetch(`/api/product/${editedProduct.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
      alert(`${editedProduct.name} is deleted...`);

      props.spinnerToggle(false);
      props.modalHandlerClose();
      router.push('./product-management');
    } else {
      props.spinnerToggle(false);
      return;
    }
  };

  return (
    <Modal
      modalTitle="Edit the product"
      modal={props.modal}
      modalHandlerClose={props.modalHandlerClose}
    >
      <div className={styles.container}>
        <form action="#" method="POST" onSubmit={formSubmitHandler}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Product name</label>
            <input
              type="text"
              name="name"
              id="name"
              // placeholder="Name of the product..."
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              // placeholder="Enter the price..."
              value={productPrice}
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="img">Image</label>
            <input
              type="url"
              name="img"
              id="img"
              // placeholder="Please input URL of the image..."
              value={productImg}
              onChange={(e) => {
                setProductImg(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save the changes
          </button>
        </form>
        <br />
        <form action="#" method="DELETE" onSubmit={deleteHandler}>
          <button type="submit" className="btn btn-secondary">
            Delete the product
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditProductForm;

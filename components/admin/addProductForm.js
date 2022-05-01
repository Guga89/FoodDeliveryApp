import Modal from '../modal';
import styles from './addProductForm.module.css';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

const AddProductForm = (props) => {
  const router = useRouter();
  const productName = useRef('');
  const productPrice = useRef(0);
  const productImg = useRef('');

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    props.spinnerToggle(true);

    const newProduct = {
      name: productName.current.value,
      price: productPrice.current.value,
      img: productImg.current.value,
      id: uuidv4(),
    };

    const res = await fetch('/api/createProduct', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    props.spinnerToggle(false);
    props.modalHandlerClose();
    router.push('./product-management');
  };

  return (
    <Modal
      modalTitle="Add a new product"
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
              placeholder="Name of the product..."
              ref={productName}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter the price..."
              ref={productPrice}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="img">Image</label>
            <input
              type="url"
              name="img"
              id="img"
              placeholder="Please input URL of the image..."
              ref={productImg}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add new product
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddProductForm;

import MenuItem from '../components/menu-item';
import ProductCard from '../components/admin/product-card';
import styles from '../components/menu-list.module.css';
import AddProductForm from '../components/admin/addProductForm';
import EditProductForm from '../components/admin/editProductForm';
import { useState } from 'react';
import Spinner from './spinner';

const MenuList = (props) => {
  const { items } = props;

  const [loading, setLoading] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [editProduct, setEditProduct] = useState({});

  const addModalClose = () => {
    setModalAdd(false);
  };
  const addModalOpen = () => {
    setModalAdd(true);
  };
  const editModalClose = () => {
    setModalEdit(false);
  };

  const editProductHandler = async (id) => {
    const res = await fetch(`/api/product/${id}`);
    const data = await res.json();
    // console.log(data);
    return data;
  };

  const editModalOpen = async (id) => {
    setLoading(true);
    const data = await editProductHandler(id);
    const product = await data;
    setEditProduct(product);
    setModalEdit(true);
    setLoading(false);
  };

  const spinnerHandler = (state) => {
    setLoading(state);
  };

  return (
    <>
      <ul role="list" className={styles.ul_container}>
        {!props.admin &&
          items.map((item) => {
            if (props.filter === 'all') {
              return <MenuItem item={item} key={item._id} />;
            } else if (
              props.filter === 'hot dishes' &&
              item.categorie === 'hot dishes'
            ) {
              return <MenuItem item={item} key={item._id} />;
            } else if (
              props.filter === 'cold dishes' &&
              item.categorie === 'cold dishes'
            ) {
              return <MenuItem item={item} key={item._id} />;
            } else if (props.filter === 'soup' && item.categorie === 'soup') {
              return <MenuItem item={item} key={item._id} />;
            } else if (props.filter === 'grill' && item.categorie === 'grill') {
              return <MenuItem item={item} key={item._id} />;
            } else if (
              props.filter === 'desert' &&
              item.categorie === 'desert'
            ) {
              return <MenuItem item={item} key={item._id} />;
            } else if (
              props.filter === 'appetizer' &&
              item.categorie === 'appetizer'
            ) {
              return <MenuItem item={item} key={item._id} />;
            }
          })}
      </ul>
      {/* ============= Product list & filtering for Product Management page */}
      {props.admin === true && (
        <ul role="list" className={styles.ul_container}>
          <li className={styles.addNewProduct} onClick={addModalOpen}>
            <p className={styles.plus}>+</p>
            <p>Add new product</p>
          </li>
          {props.admin === true &&
            items.map((item) => {
              if (props.filter === 'all') {
                return (
                  <ProductCard
                    onClick={() => {
                      editModalOpen(item._id);
                    }}
                    item={item}
                    key={item._id}
                  />
                );
              } else if (
                props.filter === 'hot dishes' &&
                item.categorie === 'hot dishes'
              ) {
                return (
                  <ProductCard
                    onClick={() => {
                      editModalOpen(item._id);
                    }}
                    item={item}
                    key={item._id}
                  />
                );
              } else if (
                props.filter === 'cold dishes' &&
                item.categorie === 'cold dishes'
              ) {
                return (
                  <ProductCard
                    onClick={() => {
                      editModalOpen(item._id);
                    }}
                    item={item}
                    key={item._id}
                  />
                );
              } else if (props.filter === 'soup' && item.categorie === 'soup') {
                return (
                  <ProductCard
                    onClick={() => {
                      editModalOpen(item._id);
                    }}
                    item={item}
                    key={item._id}
                  />
                );
              } else if (
                props.filter === 'grill' &&
                item.categorie === 'grill'
              ) {
                return (
                  <ProductCard
                    onClick={() => {
                      editModalOpen(item._id);
                    }}
                    item={item}
                    key={item._id}
                  />
                );
              } else if (
                props.filter === 'desert' &&
                item.categorie === 'desert'
              ) {
                return (
                  <ProductCard
                    onClick={() => {
                      editModalOpen(item._id);
                    }}
                    item={item}
                    key={item._id}
                  />
                );
              } else if (
                props.filter === 'appetizer' &&
                item.categorie === 'appetizer'
              ) {
                return (
                  <ProductCard
                    onClick={() => {
                      editModalOpen(item._id);
                    }}
                    item={item}
                    key={item._id}
                  />
                );
              }
            })}
        </ul>
      )}

      <AddProductForm
        modal={modalAdd}
        modalHandlerClose={addModalClose}
        spinnerToggle={spinnerHandler}
      />
      <EditProductForm
        modal={modalEdit}
        modalHandlerClose={editModalClose}
        spinnerToggle={spinnerHandler}
        product={editProduct}
      />
      {loading && <Spinner />}
    </>
  );
};

export default MenuList;

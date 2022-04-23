import MenuItem from '../components/menu-item';
import ProductCard from '../components/admin/product-card';
import styles from '../components/menu-list.module.css';

const MenuList = (props) => {
  const { items } = props;

  const editProductHandler = () => {};

  return (
    <>
      <ul role="list" className={styles.ul_container}>
        {!props.admin &&
          items.map((item) => {
            if (props.filter === 'all') {
              return <MenuItem item={item} key={item.id} />;
            } else if (
              props.filter === 'hot dishes' &&
              item.categorie === 'hot dishes'
            ) {
              return <MenuItem item={item} key={item.id} />;
            } else if (
              props.filter === 'cold dishes' &&
              item.categorie === 'cold dishes'
            ) {
              return <MenuItem item={item} key={item.id} />;
            } else if (props.filter === 'soup' && item.categorie === 'soup') {
              return <MenuItem item={item} key={item.id} />;
            } else if (props.filter === 'grill' && item.categorie === 'grill') {
              return <MenuItem item={item} key={item.id} />;
            } else if (
              props.filter === 'desert' &&
              item.categorie === 'desert'
            ) {
              return <MenuItem item={item} key={item.id} />;
            } else if (
              props.filter === 'appetizer' &&
              item.categorie === 'appetizer'
            ) {
              return <MenuItem item={item} key={item.id} />;
            }
          })}

        {/* ============= Product list & filtering for Product Management page */}
      </ul>

      <ul role="list" className={styles.ul_container}>
        <li className={styles.addNewProduct}>
          <p className={styles.plus}>+</p>
          <p>Add new product</p>
        </li>
        {props.admin === true &&
          items.map((item) => {
            if (props.filter === 'all') {
              return (
                <ProductCard
                  item={item}
                  key={item.id}
                  editProduct={editProductHandler}
                />
              );
            } else if (
              props.filter === 'hot dishes' &&
              item.categorie === 'hot dishes'
            ) {
              return (
                <ProductCard
                  item={item}
                  key={item.id}
                  editProduct={editProductHandler}
                />
              );
            } else if (
              props.filter === 'cold dishes' &&
              item.categorie === 'cold dishes'
            ) {
              return (
                <ProductCard
                  item={item}
                  key={item.id}
                  editProduct={editProductHandler}
                />
              );
            } else if (props.filter === 'soup' && item.categorie === 'soup') {
              return (
                <ProductCard
                  item={item}
                  key={item.id}
                  editProduct={editProductHandler}
                />
              );
            } else if (props.filter === 'grill' && item.categorie === 'grill') {
              return (
                <ProductCard
                  item={item}
                  key={item.id}
                  editProduct={editProductHandler}
                />
              );
            } else if (
              props.filter === 'desert' &&
              item.categorie === 'desert'
            ) {
              return (
                <ProductCard
                  item={item}
                  key={item.id}
                  editProduct={editProductHandler}
                />
              );
            } else if (
              props.filter === 'appetizer' &&
              item.categorie === 'appetizer'
            ) {
              return (
                <ProductCard
                  item={item}
                  key={item.id}
                  editProduct={editProductHandler}
                />
              );
            }
          })}
      </ul>
    </>
  );
};

export default MenuList;

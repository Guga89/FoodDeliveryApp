import styles from './categories.module.css';
const Categories = (props) => {
  return (
    <div className={styles.categories}>
      <ul role="list">
        <li
          id={props.filter === 'all' ? styles.activeCategorie : ''}
          onClick={() => {
            props.changeFilter('all');
          }}
        >
          All
        </li>
        <li
          id={props.filter === 'hot dishes' ? styles.activeCategorie : ''}
          onClick={() => {
            props.changeFilter('hot dishes');
          }}
        >
          Hot dishes
        </li>
        <li
          id={props.filter === 'cold dishes' ? styles.activeCategorie : ''}
          onClick={() => {
            props.changeFilter('cold dishes');
          }}
        >
          Cold dishes
        </li>
        <li
          id={props.filter === 'soup' ? styles.activeCategorie : ''}
          onClick={() => {
            props.changeFilter('soup');
          }}
        >
          Soup
        </li>
        <li
          id={props.filter === 'grill' ? styles.activeCategorie : ''}
          onClick={() => {
            props.changeFilter('grill');
          }}
        >
          Grill
        </li>
        <li
          id={props.filter === 'appetizer' ? styles.activeCategorie : ''}
          onClick={() => {
            props.changeFilter('appetizer');
          }}
        >
          Appetizer
        </li>
        <li
          id={props.filter === 'desert' ? styles.activeCategorie : ''}
          onClick={() => {
            props.changeFilter('desert');
          }}
        >
          Desert
        </li>
      </ul>
    </div>
  );
};

export default Categories;

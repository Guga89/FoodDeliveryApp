import useIcons from '../utils/useIcons';
import styles from './header.module.css';

const Header = (props) => {
  const { search, cart } = useIcons();

  const date = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{props.pageTitle}</h1>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.input_container}>
            <i>{search.icon}</i>
            <input type="text" placeholder="Search for goodies..." />
          </div>
          <button className={'btn btn-secondary' + ' ' + styles.cart}>
            {cart.icon}
          </button>
        </div>
      </div>
      {props.children}
    </header>
  );
};

export default Header;

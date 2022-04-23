import styles from './navbar.module.css';
import useIcons from '../utils/useIcons';
import NavListItem from './navListItem';
import { useState } from 'react';

const Navbar = () => {
  const { home2, menu, takeAway, account, notification, signOut } = useIcons();

  const navList = [home2, menu, takeAway, account, notification, signOut];

  const [shrinked, setShrinked] = useState(true);

  const navLengthToggler = () => {
    setShrinked(!shrinked);
  };

  return (
    <div
      className={shrinked ? styles.navbar + ' ' + styles.shrink : styles.navbar}
    >
      <ul role="list" className={styles.navbarList}>
        <div className={styles.logo}>
          <img src="/icon/Logo.svg" alt="" />
        </div>

        {navList.map((item, index) => {
          item.isActive = false;
          return <NavListItem navItem={item} key={index} index={index} />;
        })}
      </ul>
      <button className={styles.expandBtn} onClick={navLengthToggler}>
        &gt;
      </button>
    </div>
  );
};

export default Navbar;

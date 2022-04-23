import styles from './navListItem.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavListItem = (props) => {
  const currentPath = useRouter().asPath;

  return (
    <Link href={props.navItem.link}>
      <a
        className={
          currentPath === props.navItem.link ||
          currentPath.includes(props.navItem.link)
            ? styles.a_wrapper + ' ' + styles.active
            : styles.a_wrapper
        }
      >
        <b></b>
        <b></b>
        <div
          className={
            currentPath === props.navItem.link ||
            currentPath.includes(props.navItem.link)
              ? styles.navItemContainer + ' ' + styles.active
              : styles.navItemContainer
          }
        >
          <span
            className={
              currentPath === props.navItem.link ||
              currentPath.includes(props.navItem.link)
                ? styles.navButton + ' ' + styles.activeButton
                : styles.navButton
            }
          >
            {props.navItem.icon}
          </span>
          <span className={styles.title}>{props.navItem.name}</span>
        </div>
      </a>
    </Link>
  );
};

export default NavListItem;

import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './sidebarItem.module.css';

const SidebarItem = (props) => {
  const linkFormat = props.title.toLowerCase().replace(' ', '-');
  const currentPath = useRouter().asPath;
  const urlLink = `/admin/setting/${linkFormat}`;
  return (
    // <Link href={linkFormat === 'appearance' ? '/admin/setting/' : urlLink}>
    <Link href={urlLink}>
      <li
        className={
          currentPath === urlLink
            ? styles.sidebarItem + ' ' + styles.active
            : styles.sidebarItem
        }
      >
        {props.title}
      </li>
    </Link>
  );
};

export default SidebarItem;

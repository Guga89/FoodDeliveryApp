import styles from './adminLayout.module.css';
import useIcons from '../../utils/useIcons';
import NavListItem from '../navListItem';

const AdminLayout = (props) => {
  const { dashboard, setting, signOut } = useIcons();

  const navList = [dashboard, setting, signOut];

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ul role="list" className={styles.navbarList}>
          <div className={styles.logo}>
            <img src="/icon/Logo.svg" alt="" />
          </div>
          {navList.map((item, index) => {
            item.isActive = false;
            return <NavListItem navItem={item} key={index} index={index} />;
          })}
        </ul>
      </div>
      <main className={styles.content}>{props.children}</main>
    </div>
  );
};

export default AdminLayout;

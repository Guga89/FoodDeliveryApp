import styles from './settingsLayout.module.css';
import SidebarItem from './sidebarItem';

const SettingsLayout = (props) => {
  const sideBarItems = [
    'Appearance',
    'Banner',
    'Employees',
    'Product Management',
    'Permissions',
    'Blog',
    'Company Information',
  ];
  return (
    <div className={styles.container}>
      <h1>Admin page</h1>
      <div className={styles.container__inner}>
        <div className={styles.sidebar}>
          <ul role={'list'}>
            {sideBarItems.map((sidebarItem) => {
              return <SidebarItem title={sidebarItem} key={sidebarItem} />;
            })}
          </ul>
        </div>
        <main className={styles.content}>{props.children}</main>
      </div>
    </div>
  );
};

export default SettingsLayout;

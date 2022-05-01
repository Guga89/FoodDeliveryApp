import styles from './spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Spinner;

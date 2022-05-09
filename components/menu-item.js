import Link from 'next/link';
// import Image from 'next/image';
import styles from './menu-item.module.css';

const MenuItem = (props) => {
  const { item } = props;
  return (
    <Link href={`/menu/${item._id}`}>
      <a>
        <li>
          <div className={styles.card}>
            <div className={styles.card_container}>
              {/* <div className={styles.cardImg}>
                <Image src={item.img} alt="card image" layout="fill" />
              </div> */}
              <img className={styles.cardImg} src={item.img} />
              <h3 className={styles.title}>{item.name}</h3>
              <p className={styles.price}>${item.price}.99</p>
              <p className={styles.portions}>6 portions available</p>
            </div>
          </div>
        </li>
      </a>
    </Link>
  );
};

export default MenuItem;

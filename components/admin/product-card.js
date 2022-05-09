import useIcons from '../../utils/useIcons';
// import Image from 'next/image';
import styles from './product-card.module.css';

const ProductCard = (props) => {
  const { item } = props;
  const { edit } = useIcons();
  return (
    <div
      onClick={() => {
        props.onClick(item._id);
      }}
    >
      <li>
        <div className={styles.card_container}>
          {/* <div className={styles.cardImg}>
                <Image src={item.img} alt="card image" layout="fill" />
              </div> */}
          <img className={styles.cardImg} src={item.img} />
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.info}>${item.price}.99 | 6 portions</p>
          <div className={styles.edit}>{edit.icon} Edit product</div>
        </div>
      </li>
    </div>
  );
};

export default ProductCard;

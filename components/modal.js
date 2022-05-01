import styles from './modal.module.css';

const Modal = (props) => {
  return (
    <div
      className={props.modal ? styles.overlay : styles.closeModal}
      onClick={props.modalHandlerClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3>{props.modalTitle}</h3>
        <div className={styles.cancelIcon} onClick={props.modalHandlerClose}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

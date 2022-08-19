import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      <span>Load more</span>
    </button>
  );
};

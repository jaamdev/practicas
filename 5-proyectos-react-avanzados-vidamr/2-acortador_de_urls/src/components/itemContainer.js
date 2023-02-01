import styles from "./itemContainer.module.css";

export default function ItemsContainer({ children }) {
  return <div className={styles.itemsContainer}>{children}</div>;
}

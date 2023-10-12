import styles from "../styles/Button.module.css";

export default function Button({ style, children }) {
  return <div className={`${styles.button} ${style}`}>{children}</div>;
}
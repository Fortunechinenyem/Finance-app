import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  variant = "primary",
  ...props
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

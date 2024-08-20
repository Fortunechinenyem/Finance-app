import styles from "./SummaryCard.module.css";

export default function SummaryCard({ title, amount, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>${amount.toFixed(2)}</p>
      </div>
    </div>
  );
}

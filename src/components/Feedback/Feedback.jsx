import css from "./Feedback.module.css";

export const Feedback = ({ value, totalFeed, info }) => {
  const { good, neutral, bad } = value;

  return (
    <div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <p className={css.listText}>Good: {good}</p>
        </li>
        <li className={css.listItem}>
          <p className={css.listText}>Neutral: {neutral}</p>
        </li>
        <li className={css.listItem}>
          <p className={css.listText}>Bad: {bad}</p>
        </li>
        <li className={css.listItem}>
          <p className={css.listText}>Total: {totalFeed}</p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Positive: {info}%</p>
        </li>
      </ul>
    </div>
  );
};

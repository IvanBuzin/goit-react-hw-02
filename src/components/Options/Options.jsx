import css from "./Options.module.css";

export const Options = ({ onTrack, totalFeed, setFeedback }) => {
  return (
    <ul className={css.listBtn}>
      <li>
        <button className={css.btn} onClick={() => onTrack("good")}>
          Good
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => onTrack("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => onTrack("bad")}>
          Bad
        </button>
      </li>
      {totalFeed >= 1 && (
        <li>
          <button
            className={css.btn}
            onClick={() => {
              setFeedback({ good: 0, neutral: 0, bad: 0 });
            }}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

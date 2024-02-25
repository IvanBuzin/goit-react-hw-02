import { useEffect, useState } from "react";
import "../node_modules/modern-normalize/modern-normalize.css";
import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

const feedbackInfo = () => {
  const feedbackValue = localStorage.getItem("feedbackInfo");
  return feedbackValue !== null
    ? JSON.parse(feedbackValue)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export const App = () => {
  const [feedback, setFeedback] = useState(feedbackInfo);
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveInfo = Math.round(
    ((feedback.good + feedback.neutral) / totalFedback) * 100
  );

  useEffect(() => {
    localStorage.setItem("feedbackInfo", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        onTrack={(feedbackType) => updateFeedback(feedbackType)}
        totalFeed={totalFedback}
        setFeedback={setFeedback}
      />
      {totalFedback >= 1 && (
        <Feedback
          value={feedback}
          totalFeed={totalFedback}
          info={positiveInfo}
        />
      )}
      {totalFedback < 1 && <Notification />}
    </div>
  );
};

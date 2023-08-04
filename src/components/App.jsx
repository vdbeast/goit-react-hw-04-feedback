import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercents = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbacks = countPositiveFeedbackPercents();

  return (
    <div>
      <Section title = "Please leave your feedback">
      <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
      />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positiveFeedbacks={positiveFeedbacks}
          /> :
          (
            <Notification message="There is no feedback yet." />
          )}
      </Section>
    </div>
  )
};

export default App;
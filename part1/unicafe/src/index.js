import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Statistics component
const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0)
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={good + neutral + bad} />
        <Statistic
          text="average"
          value={(good - bad) / (good + neutral + bad)}
        />
        <Statistic
          text="positive"
          value={(good / (good + neutral + bad)) * 100}
        />
      </table>
    </div>
  );
};

// Button Component
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// Statistic Component
const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {text === "positive" && "%"}
      </td>
    </tr>
  );
};

const App = () => {
  // State
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

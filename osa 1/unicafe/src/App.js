import React, { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text} {props.value}
      </td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const sum = good + neutral + bad;
  const average = (good - bad) / sum || 0;

  const checkIfPositive = () => {
    if (neutral === 0 && bad === 0 && good > 0) {
      const positive = 100 + "%";
      return positive;
    } else {
      const positive = (good / sum) * 100 || 0;
      return positive + "%";
    }
  };

  if (neutral === 0 && bad === 0 && good === 0) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>No feedback given</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={sum} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={checkIfPositive()} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

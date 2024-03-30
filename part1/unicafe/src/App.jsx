import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  if (all < 1) return 'No feedback given';

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine text='good' value={good}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text='neutral' value={neutral}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text='bad' value={bad}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text='all' value={all}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text='average' value={average}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine
              text='positive'
              value={positive + ' %'}
            ></StatisticLine>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ eventHandler, text }) => {
  return <button onClick={eventHandler}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    }
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button eventHandler={() => feedback('good')} text='good'></Button>
      <Button eventHandler={() => feedback('neutral')} text='neutral'></Button>
      <Button eventHandler={() => feedback('bad')} text='bad'></Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;

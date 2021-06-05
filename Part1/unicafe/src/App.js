import React, { useState } from "react";

const Statistics = ({text,myVal,text2}) => {
  return (
    <tr>
      <td>{text}</td> <td>{myVal}{text2} </td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addMe = (addValue, setValue) => {
    setValue(addValue + 1);
  };

  const printMeIf = (good, neutral, bad) => {
    const total = good + neutral + bad;
    if (total > 0.5)
      return (
          <table>
            <Statistics text="good" myVal={good} />
            <Statistics text="neutral" myVal={neutral} />
            <Statistics text="bad" myVal={bad} />
            <Statistics text="total" myVal={good + neutral + bad} />
            <Statistics text="average" myVal={((good - bad) / 3).toFixed(2)} />
            <Statistics text="positive" myVal={((good / total) * 100).toFixed(2)} text2="%" />
          </table>
      );
    else return <p>No feedback given </p>;
  };
  return (
    <div>
      <h2> Give Feedback</h2>
      <button onClick={() => addMe(good, setGood)}>good</button>
      <button onClick={() => addMe(neutral, setNeutral)}>neutral</button>
      <button onClick={() => addMe(bad, setBad)}>bad</button>
      <h2>statistics</h2>
      {printMeIf(good, neutral, bad)}
    </div>
  );
};

export default App;

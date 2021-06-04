import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];
  const myRandomInteger = (minVal, maxVal) => {
    return Math.floor(Math.random() * (maxVal - minVal) + minVal);
  };
  const [selected, setSelected] = useState(0);
  const [upvotes, setUpvote] = useState([0, 0, 0, 0, 0, 0, 0]);
  console.log(myRandomInteger(0, anecdotes.length));
  const sumList = (myList) => {
    return myList.reduce((a, b) => a + b, 0);
  };

  const upvote = () => {
    const newUpvotes = [...upvotes];
    newUpvotes[selected] += 1;
    setUpvote(newUpvotes);
    console.log(newUpvotes[0]);
  };
  const selectAnec = () => {
    setSelected(myRandomInteger(0, anecdotes.length));
  };
  console.log(upvotes);
  const printUpvoteNumber = () => {
    console.log(sumList(upvotes))
    if (sumList(upvotes) < 1) return ;
    else return  <div><h3>Most upvotes:</h3> {anecdotes[upvotes.indexOf(Math.max(...upvotes))]}</div>
  };
  return (
    <div>
    <h1> Anecdote of the day</h1>
      {anecdotes[selected]} has {upvotes[selected]} votes

      <div>
        <button onClick={() => selectAnec()}> next anecdotes</button>
        <button onClick={() => upvote()}> upvote </button>
      </div>
      {printUpvoteNumber()}
    </div>
  );
};

export default App;

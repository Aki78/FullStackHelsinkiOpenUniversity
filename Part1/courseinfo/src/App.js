import React from "react";
import { Header } from "./Components/Header";
import { Contents } from "./Components/Contents";
import { Total } from "./Components/Total";

const exercises1 = 10;
const exercises2 = 7;
const exercises3 = 14;

const exerciseS = [exercises1, exercises2, exercises3];

const App = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <Header course={course} />
      <Contents exerciseS={exerciseS} />
      <Total exerciseS={exerciseS} />
    </div>
  );
};

export default App;

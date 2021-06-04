import React from "react";
import { Header } from "./Components/Header";
import { Contents } from "./Components/Contents";
import { Total } from "./Components/Total";


const App = () => {

  const partS = [
   {
    name: "Fundamentals of React",
    exercises: 10,
  },
   {
    name: "Using props to pass data",
    exercises: 7,
  },
   {
    name: "State of a component",
    exercises: 14,
  } 
  ];

  const courseName = "Half Stack application development";

  const course = {
    name: courseName,
    parts: partS,
  };
  console.log(course.parts)

  return (
    <div>
      <Header course={courseName} />
      <Contents course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;

//const part1 = "Fundamentals of React";
//const part2 = "Using props to pass data";
//const part3 = "State of a component";
import { Total } from "./Total";

const Content = ({ part, ex }) => (
  <p>
    {part} {ex}
  </p>
);

export const Contents = ({ courses }) =>
  courses.map((content, index) => (
    <div key={index}>
      course: {content.name}
      {content.parts.map((eachCourse, eachIndex) => (
        <Content
          key={eachCourse.id}
          key={eachCourse.id}
          part={eachCourse.name}
          ex={eachCourse.exercises}
        />
      ))}
      {console.log(content.parts, "is not")}
      <Total key={content.id} parts={content.parts} />
    </div>
  ));

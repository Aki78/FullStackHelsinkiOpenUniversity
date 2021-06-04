//const part1 = "Fundamentals of React";
//const part2 = "Using props to pass data";
//const part3 = "State of a component";

const Content = ({part, ex}) => (
  <p>
    {part} {ex}
  </p>
);

export const Contents = ({ course }) => {
  const myParts = course.parts
  console.log(myParts)
  const spitMeOut = myParts.map((content,index) => <Content key={index} part={content.name} ex={content.exercises} />)
  console.log(spitMeOut)
  return <> {spitMeOut}</>
};

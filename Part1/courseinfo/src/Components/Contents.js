const part1 = "Fundamentals of React";
const part2 = "Using props to pass data";
const part3 = "State of a component";

const partS = [part1, part2, part3];

const Content = ({part, ex}) => (
  <p>
    {part} {ex}
  </p>
);

export const Contents = ({ exerciseS }) => {
  const spitMeOut = partS.map((content,index) => <Content key={index} part={content} ex={exerciseS[index]} />)
  console.log(spitMeOut)
  return <> {spitMeOut}</>
};

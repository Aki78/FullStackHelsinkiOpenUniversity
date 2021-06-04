export const Total = ({course}) => {
  const parts = course.parts
  const total = parts.reduce((total, ex) => total + ex.exercises, 0)
  return <p>Number of exercises {total}</p>;
};

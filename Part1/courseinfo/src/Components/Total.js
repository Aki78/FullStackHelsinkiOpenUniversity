export const Total = ({exerciseS}) => {
  const total = exerciseS.reduce((total, ex) => total + ex, 0)
  return <p>Number of exercises {total}</p>;
};

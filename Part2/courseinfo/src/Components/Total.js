export const Total = ({ parts }) => {
  console.log(parts, "wtf")
  const total = parts.reduce((total, ex) =>  total + ex.exercises, 0);
  console.log(total, "is")
  return (
    <p >
      <b>Total of {total} exercises</b>
    </p>
  );
};

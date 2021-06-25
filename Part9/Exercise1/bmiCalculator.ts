const calculateBmi = (w: number, h: number): string => {
  const bmi = w / h / h;
  if (bmi <= 18) return "too skinny"
  else if (bmi > 18 && bmi <= 23) return "healthy"
  else return "fat"
};
console.log(calculateBmi(80, 1.8));

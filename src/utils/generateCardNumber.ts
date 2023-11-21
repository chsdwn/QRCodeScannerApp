export const generateCardNumber = () => {
  const number = Math.random().toString().slice(2, 18);
  return number.split('').reduce((acc, curr, i) => {
    if (i > 0 && i % 4 === 0) {
      return acc + ' ' + curr;
    }
    return acc + curr;
  }, '');
};

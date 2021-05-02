export const generateRandomNumber = (digits) => {
  return parseInt((Math.random() * 10).toFixed(digits), 10);
};

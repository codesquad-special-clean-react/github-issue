export const createHex = () => {
  let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[random];
  }

  return {
    hexColor,
  };
};

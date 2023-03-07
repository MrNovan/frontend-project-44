const getRandomNumber = (min = 0, max = 20) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};
export default getRandomNumber;

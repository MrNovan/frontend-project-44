import getRandomNumber from '../random.js';
import playGame from '../index.js';

const gameSay = 'Find the greatest common divisor of given numbers.';

const NOD = (x, y) => {
  if (y > x) {
    return NOD(y, x);
  }
  if (!y) {
    return x;
  }
  return NOD(y, x % y);
};

const playGCD = () => {
  const numberOne = getRandomNumber(20, 100);
  const numberTwo = getRandomNumber(20, 100);
  const question = `${numberOne} ${numberTwo}`;
  const correct = String(NOD(numberOne, numberTwo));
  return [question, correct];
};

const startGame = () => {
  playGame(playGCD, gameSay);
};

export default startGame;

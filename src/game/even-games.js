import getRandomNumber from '../random.js';
import playGame from '../index.js';

const gameSay = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenOdd = (number) => (number % 2 === 0);

const playEven = () => {
  const num = getRandomNumber(0, 99);
  const correct = (evenOdd(num)) ? 'yes' : 'no';
  return [num, correct];
};

const startGame = () => {
  playGame(playEven, gameSay);
};

export default startGame;

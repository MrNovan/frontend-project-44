import getRandomNumber from '../random.js';
import playGame from '../index.js';

const gameSay = 'What number is missing in the progression?';

const progression = (startNumber, lengtNumber, stepNumber) => {
  const arrayNumber = [];
  for (let i = 0; i <= (lengtNumber - 1); i += 1) {
    arrayNumber.push(startNumber + stepNumber * i);
  }
  return arrayNumber;
};

const playProgression = () => {
  const startCount = getRandomNumber(1, 5);
  const lengthCount = getRandomNumber(5, 10);
  const stepCount = getRandomNumber(2, 5);
  const element = getRandomNumber(0, lengthCount);
  const startProgression = progression(startCount, lengthCount, stepCount);
  const correct = String(startProgression[element - 1]);
  startProgression[element - 1] = '..';
  const question = String(startProgression.join(' '));
  return [question, correct];
};

const startGame = () => {
  playGame(playProgression, gameSay);
};

export default startGame;

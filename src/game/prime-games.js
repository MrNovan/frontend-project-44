import getRandomNumber from '../random.js';
import playGame from '../index.js';

const gameSay = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = (number) => {
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const playPrime = () => {
  const number = getRandomNumber();
  const correct = (primeGame(number)) ? 'yes' : 'no';
  return [number, correct];
};

const startGame = () => {
  playGame(playPrime, gameSay);
};

export default startGame;

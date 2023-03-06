import getRandomNumber from '../random.js';
import playGame from '../index.js';

const gameSay = 'What is the result of the expression?';

const calculate = (numOne, numTwo, operation) => {
  switch (operation) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};

const playCalc = () => {
  const one = getRandomNumber();
  const two = getRandomNumber();
  const operator = ['+', '-', '*'];
  const operators = operator[getRandomNumber(0, operator.length - 1)];
  const question = `${one} ${operators} ${two}`;
  const correct = calculate(one, two, operators).toString();
  return [question, correct];
};

const startGame = () => {
  playGame(playCalc, gameSay);
};

export default startGame;

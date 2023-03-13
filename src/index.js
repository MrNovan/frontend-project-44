import readlineSync from 'readline-sync';

const playGame = (getRoundData, gameSay) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameSay);
  const Rounds = 3;

  for (let i = 1; i <= Rounds; i += 1) {
    const [question, correct] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correct !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;

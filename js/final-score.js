const VALID_ANSWER = 100;
const FAST_ANSWER = 50;
const SLOW_ANSWER = -FAST_ANSWER;
const FAST_TIME = 10;
const SLOW_TIME = 20;
const SCORE_LENGTH = 5;

export const getFinalScore = (playerScore, numberLivesLeft) => {
  let finalScoreResult = 0;

  if (typeof playerScore !== `object` || typeof numberLivesLeft !== `number`) {
    return false;
  }

  if (playerScore.length < SCORE_LENGTH || numberLivesLeft < 0) {
    return -1;
  }

  playerScore.forEach((scoreItem) => {
    if (scoreItem.answerResult !== 0) {
      finalScoreResult += VALID_ANSWER;
      if (scoreItem.answerTime < FAST_TIME) {
        finalScoreResult += FAST_ANSWER;
      } else if (scoreItem.answerTime > SLOW_TIME) {
        finalScoreResult += SLOW_ANSWER;
      }
    }
  });

  finalScoreResult += numberLivesLeft * FAST_ANSWER;

  return finalScoreResult;

};

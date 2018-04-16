const VALID_ANSWER = 100;
const FAST_ANSWER = 50;
const SLOW_ANSWER = -FAST_ANSWER;
const FAST_TIME = 10;
const SLOW_TIME = 20;
const SCORE_LENGTH = 10;

export const finalScore = (playerScore, numberLivesLeft) => {
  if (typeof playerScore !== `object` || typeof numberLivesLeft !== `number`) {
    return false;
  } else {
    if (playerScore.length < SCORE_LENGTH) {
      return -1;
    } else {
      let finalScoreResult = 0;

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
    }
  }
};

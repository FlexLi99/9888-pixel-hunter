import {Constants} from './data/game-data';

export const getFinalScore = (playerScore, numberLivesLeft) => {
  let finalScoreResult = 0;

  if (typeof playerScore !== `object` || typeof numberLivesLeft !== `number`) {
    return false;
  }

  if (playerScore.length < Constants.SCORE_LENGTH || numberLivesLeft < 0) {
    return -1;
  }

  playerScore.forEach((scoreItem) => {
    if (scoreItem.answerResult !== 0) {
      finalScoreResult += Constants.VALID_ANSWER;
      if (scoreItem.answerTime < Constants.FAST_TIME) {
        finalScoreResult += Constants.FAST_ANSWER;
      } else if (scoreItem.answerTime > Constants.SLOW_TIME) {
        finalScoreResult += Constants.SLOW_ANSWER;
      }
    }
  });

  finalScoreResult += numberLivesLeft * Constants.FAST_ANSWER;

  return finalScoreResult;

};

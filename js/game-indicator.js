import {scoreState} from './game-stat';
import {Constants} from './data/game-data';

export const getScoreStat = () => {
  const setState = () => {
    let scoreList = ``;

    scoreState.forEach((item) => {
      if (item.answerTime > 0 && item.answerTime < Constants.FAST_TIME) {
        scoreList += `<li class="stats__result stats__result--fast"></li>`;
      } else if (item.answerTime >= Constants.SLOW_TIME) {
        scoreList += `<li class="stats__result stats__result--slow"></li>`;
      } else if (item.answerTime >= Constants.FAST_TIME && item.answerTime < Constants.SLOW_TIME) {
        scoreList += `<li class="stats__result stats__result--correct"></li>`;
      } else if (item.answerTime === 0) {
        scoreList += `<li class="stats__result stats__result--wrong"></li>`;
      } else {
        scoreList += `<li class="stats__result stats__result--unknown"></li>`;
      }
    });

    return scoreList;
  };

  const getScoreTemplate = `
    <ul class="stats">
      ${setState()}
    </ul>
  `;

  return getScoreTemplate;
};

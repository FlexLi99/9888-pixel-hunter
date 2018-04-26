import {scoreState} from './game-stat';

const UNKNOWN = null;
const WRONG = 0;
const CORRECT = 1;
const FAST = 0.5;
const SLOW = 2;

export const getScoreStat = () => {
  const setState = () => {
    let scoreList = ``;

    for (let i = 0; i < scoreState.length; i++) {
      switch (scoreState[i].answerIndic) {
        case UNKNOWN:
          scoreList += `<li class="stats__result stats__result--unknown"></li>`;
          break;
        case WRONG:
          scoreList += `<li class="stats__result stats__result--wrong"></li>`;
          break;
        case CORRECT:
          scoreList += `<li class="stats__result stats__result--correct"></li>`;
          break;
        case FAST:
          scoreList += `<li class="stats__result stats__result--fast"></li>`;
          break;
        case SLOW:
          scoreList += `<li class="stats__result stats__result--slow"></li>`;
          break;
      }
    }
    return scoreList;
  };

  const getScoreTemplate = `
    <ul class="stats">
      ${setState()}
    </ul>
  `;

  return getScoreTemplate;
};

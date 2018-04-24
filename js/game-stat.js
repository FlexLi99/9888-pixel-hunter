import {initialState, infoFrames, scoreState} from './data/game-data';
import frameChange from './frame-change';

const LIVE_VAL = 3;
const UNKNOWN = null;
const WRONG = 0;
const CORRECT = 1;
const FAST = 0.5;
const SLOW = 2;
const FAST_TIME = 10;
const SLOW_TIME = 20;

export const setScoreState = (gameResult) => {
  scoreState[initialState.currentFrame - Object.keys(infoFrames).length] = gameResult;
};

export const getGameStat = () => {
  const gameStatTemplate = `
    <h1 class="game__timer">${initialState.time}</h1>
    <div class="game__lives">
      ${new Array(initialState.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      ${new Array(LIVE_VAL - initialState.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>`;

  return gameStatTemplate;
};

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

export const errorAnswer = () => {
  initialState.lives = initialState.lives - 1;
  setScoreState({answerResult: 0, answerTime: 0, answerIndic: WRONG});
  if (initialState.lives < 0) {

    frameChange(initialState.allFrames - 1);
  } else {
    frameChange(++initialState.currentFrame);
  }
};

export const validAnswer = () => {
  if (initialState.time < FAST_TIME) {
    setScoreState({answerResult: 1, answerTime: initialState.time, answerIndic: FAST});
  } else if (initialState.time > SLOW_TIME) {
    setScoreState({answerResult: 1, answerTime: initialState.time, answerIndic: SLOW});
  } else {
    setScoreState({answerResult: 1, answerTime: initialState.time, answerIndic: CORRECT});
  }
  frameChange(++initialState.currentFrame);
};

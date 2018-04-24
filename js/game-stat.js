import {initialState, infoFrames, games} from './data/game-data';
import {frames} from './game-frames';
import frameChange from './frame-change';

const LIVE_VAL = 3;
const UNKNOWN = null;
const WRONG = 0;
const CORRECT = 1;
const FAST = 0.5;
const SLOW = 2;
const FAST_TIME = 10;
const SLOW_TIME = 20;

//  Массив структуры данных для статистики ответов

export const scoreState = [];

for (let i = 0; i < Object.keys(games).length; i++) {
  scoreState.push(UNKNOWN);
}

const setScoreState = (gameResult) => {
  scoreState[initialState.frame - Object.keys(infoFrames).length] = gameResult;
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
      switch (scoreState[i]) {
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
  setScoreState(WRONG);
  if (initialState.lives < 0) {
    frameChange(frames[frames.length - 1]);
  }
};

export const validAnswer = () => {
  if (initialState.time < FAST_TIME) {
    setScoreState(FAST);
  } else if (initialState.time > SLOW_TIME) {
    setScoreState(SLOW);
  } else {
    setScoreState(CORRECT);
  }
};

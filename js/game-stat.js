import {initialState, InfoFrames} from './data/game-data';
import {getFinalScore} from './final-score';
import {frameChange, gameFrames, allAppFrames} from './frame-change';

const LIVE_VAL = 3;
const UNKNOWN = null;
const WRONG = 0;
const CORRECT = 1;
const FAST = 0.5;
const SLOW = 2;
const FAST_TIME = 10;
const SLOW_TIME = 20;

//  Массив структуры данных для статистики ответов

const scoreState = [];

//  Массив структуры данных для хранеия результатов игры

export const gamesResult = [];

export const gameStat = Object.assign({}, initialState);

const getGameStat = () => {
  gameStat.gameFrames = gameFrames.length;
  gameStat.allFrames = allAppFrames.length;

  for (let i = 0; i < gameStat.gameFrames; i++) {
    scoreState.push({answerIndic: null});
  }
};

getGameStat();

export const getLives = () => {
  const liveStatTemplate = `
    <h1 class="game__timer">${initialState.time}</h1>
    <div class="game__lives">
      ${new Array(initialState.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      ${new Array(LIVE_VAL - initialState.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>`;

  return liveStatTemplate;
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

const setScoreState = (gameResult) => {
  scoreState[initialState.currentFrame - Object.keys(InfoFrames).length] = gameResult;
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
    initialState.fastPt++;
    setScoreState({answerResult: 1, answerTime: initialState.time, answerIndic: FAST});
  } else if (initialState.time > SLOW_TIME) {
    initialState.slowPt++;
    setScoreState({answerResult: 1, answerTime: initialState.time, answerIndic: SLOW});
  } else {
    setScoreState({answerResult: 1, answerTime: initialState.time, answerIndic: CORRECT});
  }

  if (initialState.currentFrame + 1 === initialState.allFrames - 1) {
    setGameResult();
  }

  frameChange(++initialState.currentFrame);
};

const setGameResult = () => {
  const GameResult = {
    game: ``,
    resultLine: getScoreStat(),
    resultScore: getFinalScore(scoreState, initialState.lives),
    fastCount: initialState.fastPt,
    slowCount: initialState.slowPt,
    correct: initialState.gameFrames - initialState.lives,
    restLives: initialState.lives
  };

  gamesResult.push(GameResult);

  console.log(gamesResult);
};

export const getNextFrame = () => {
  frameChange(++initialState.currentFrame);
};

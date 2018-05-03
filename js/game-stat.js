// import {frameChange} from './frame-change';
// import {InitialState, Service, Constants} from './data/game-data';
// import {getFinalScore} from './final-score';
// import {getScoreStat} from './game-indicator';

const WIN = Service.WIN;
const FAIL = Service.FAIL;

export let gameStat = Object.assign({}, InitialState);

const getGameStat = () => {
  const newScoreStat = new Array(gameStat.GAME_FRAMES).fill({answerResult: null, answerTime: null});

  return newScoreStat;
};

//  Массив структуры данных для статистики ответов

export let scoreState = getGameStat();

// Функция заолнения массива статистики ответов

const setScoreState = (gameResult) => {
  scoreState[gameStat.CURRENT_FRAME - Constants.INFO_FRAMES] = gameResult;
};


//  Массив структуры данных для хранеия результатов игры

export const gamesResult = [];

// Функция заполнения массива данными о каждой игре

const setGameResult = (value) => {
  const GameResult = {
    gameStatus: value,
    resultLine: getScoreStat(),
    restLives: gameStat.LIVES,
    resultScore: getFinalScore(scoreState, gameStat.LIVES),
    fastCount: () => scoreState.filter((item) => item.answerTime < Constants.FAST_TIME).length,
    slowCount: () => scoreState.filter((item) => item.answerTime > Constants.SLOW_TIME).length,
    correct: () => gameStat.GAME_FRAMES - (InitialState.LIVES - gameStat.LIVES)
  };

  gamesResult.push(GameResult);
};

// Функция для обработки ошибочного ответа

export const setErrorAnswer = () => {
  gameStat.LIVES = gameStat.LIVES - 1;
  setScoreState({answerResult: 0, answerTime: 0});

  if (gameStat.LIVES < 0) {
    setGameResult(FAIL);
    frameChange(gameStat.ALL_FRAMES - 1);
  } else if (gameStat.CURRENT_FRAME + 1 === gameStat.ALL_FRAMES - 1) {
    setGameResult(WIN);
    frameChange(++gameStat.CURRENT_FRAME);
  } else {
    frameChange(++gameStat.CURRENT_FRAME);
  }
};

// Функция для обработки правильного ответа

export const setValidAnswer = () => {
  setScoreState({answerResult: 1, answerTime: gameStat.TIME});

  if (gameStat.CURRENT_FRAME + 1 === gameStat.ALL_FRAMES - 1) {
    setGameResult(WIN);
  }

  frameChange(++gameStat.CURRENT_FRAME);
};

// функция переключения игровых экранов

export const getNextFrame = (value) => {
  if (typeof value === `undefined`) {
    frameChange(++gameStat.CURRENT_FRAME);
  } else {
    frameChange(gameStat.CURRENT_FRAME = value);
  }
};

// Функция для сброса данных о текущей игре

export const gameReset = () => {
  gameStat = Object.assign({}, InitialState);
  scoreState = getGameStat();
};

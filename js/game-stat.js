import {frameChange, gameFrames, allAppFrames} from './frame-change';
import {InitialState, InfoFrames, Service} from './data/game-data';
import {getFinalScore} from './final-score';
import {getScoreStat} from './game-indicator';

const LIVE_VAL = 3;
const UNKNOWN = null;
const WRONG = 0;
const CORRECT = 1;
const FAST = 0.5;
const SLOW = 2;
const FAST_TIME = 10;
const SLOW_TIME = 20;
const WIN = Service.win;
const FAIL = Service.fail;

//  Массив структуры данных для хранеия результатов игры

export const gamesResult = [];

export let gameStat = Object.assign({}, InitialState);

const getGameStat = () => {
  const newScoreStat = [];

  gameStat.gameFrames = gameFrames.length;
  gameStat.allFrames = allAppFrames.length;

  for (let i = 0; i < gameStat.gameFrames; i++) {
    newScoreStat.push({answerIndic: UNKNOWN});
  }

  return newScoreStat;
};

//  Массив структуры данных для статистики ответов

export let scoreState = getGameStat();

// Функция заолнения массива статистики ответов

const setScoreState = (gameResult) => {
  scoreState[gameStat.currentFrame - Object.keys(InfoFrames).length] = gameResult;
};

// Функция для обработки ошибочного ответа

export const errorAnswerHandler = () => {
  gameStat.lives = gameStat.lives - 1;
  setScoreState({answerResult: 0, answerTime: 0, answerIndic: WRONG});

  if (gameStat.lives < 0) {
    setGameResult(FAIL);
    frameChange(gameStat.allFrames - 1);
  } else if (gameStat.currentFrame + 1 === gameStat.allFrames - 1) {
    setGameResult(WIN);
    frameChange(++gameStat.currentFrame);
  } else {
    frameChange(++gameStat.currentFrame);
  }
};

// Функция для обработки правильного ответа

export const validAnswerHandler = () => {
  if (gameStat.time < FAST_TIME) {

    gameStat.fastPt++;
    setScoreState({answerResult: 1, answerTime: gameStat.time, answerIndic: FAST});
  } else if (gameStat.time > SLOW_TIME) {

    gameStat.slowPt++;
    setScoreState({answerResult: 1, answerTime: gameStat.time, answerIndic: SLOW});
  } else {

    setScoreState({answerResult: 1, answerTime: gameStat.time, answerIndic: CORRECT});
  }

  if (gameStat.currentFrame + 1 === gameStat.allFrames - 1) {
    setGameResult(WIN);
  }

  frameChange(++gameStat.currentFrame);
};

// Функция заполнения массива данными о каждой игре

const setGameResult = (value) => {
  const GameResult = {
    gameStatus: value,
    resultLine: getScoreStat(),
    fastCount: gameStat.fastPt,
    slowCount: gameStat.slowPt,
    restLives: gameStat.lives,
    resultScore: getFinalScore(scoreState, gameStat.lives),
    correct: () => gameStat.gameFrames - (LIVE_VAL - gameStat.lives)
  };

  gamesResult.push(GameResult);
};

// функция переключения игровых экранов

export const getNextFrame = (value) => {
  if (typeof value === `undefined`) {
    frameChange(++gameStat.currentFrame);
  } else {
    frameChange(gameStat.currentFrame = value);
  }
};

// Функция для сброса данных о текущей игре

export const gameReset = () => {
  gameStat = Object.assign({}, InitialState);
  scoreState = getGameStat();
};

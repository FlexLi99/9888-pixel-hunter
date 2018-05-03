export const InitialState = Object.freeze({
  ALL_FRAMES: 14,
  GAME_FRAMES: 10,
  CURRENT_FRAME: 0,
  TIME: 15,
  LIVES: 3,
  PROGRESS: new Array(10).fill({answerResult: null, answerTime: null})
});

export const Constants = Object.freeze({
  FAST_TIME: 10,
  SLOW_TIME: 20,
  INFO_FRAMES: 3,
  VALID_ANSWER: 100,
  FAST_ANSWER: 50,
  SLOW_ANSWER: -50,
  SCORE_LENGTH: 10
});

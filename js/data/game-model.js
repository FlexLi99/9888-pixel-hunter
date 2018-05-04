import {InitialState, gamesResult, Constants} from './game-state';
import {getFinalScore} from '../final-score';
import GameProgress from '../game-progress';

export default class GameModel {
  constructor() {
    this.restart();
    this.progressInit();
  }

  get state() {
    return this._state;
  }

  get isFail() {
    return this._state.LIVES < 0;
  }

  get hasFinish() {
    return this._state.CURRENT_FRAME + 1 === this._state.GAME_FRAMES;
  }

  getNextGame() {
    ++this._state.CURRENT_FRAME;
  }

  progressInit() {
    this._state.PROGRESS = new Array(InitialState.GAME_FRAMES).fill({answerResult: null, answerTime: null});
  }

  setProgress(gameResult) {
    this._state.PROGRESS[this._state.CURRENT_FRAME] = gameResult;
  }


  setScore(gameResult) {
    this.setProgress(gameResult);
  }

  setGameResult(result) {
    const progress = new GameProgress(this._state);
    const GameResult = {
      gameStatus: result,
      resultLine: progress.getProgress(),
      restLives: this._state.LIVES,
      resultScore: getFinalScore(this._state.PROGRESS, this._state.LIVES),
      fastCount: () => this._state.PROGRESS.filter((item) => item.answerTime < Constants.FAST_TIME).length,
      slowCount: () => this._state.PROGRESS.filter((item) => item.answerTime > Constants.SLOW_TIME).length,
      correct: () => this._state.GAME_FRAMES - (InitialState.LIVES - this._state.LIVES)
    };

    gamesResult.push(GameResult);
  }

  die() {
    this._state.LIVES = this._state.LIVES - 1;
  }

  restart() {
    this._state = Object.assign({}, InitialState);
  }
}

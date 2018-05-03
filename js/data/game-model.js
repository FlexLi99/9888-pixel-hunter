import {InitialState, Constants} from './game-state';

export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    console.log(this._state);
    return this._state;
  }

  nextGame(gameResult) {
    ++this._state.CURRENT_FRAME;
    this.progress(gameResult);
  }

  die() {
    this._state.LIVES = this._state.LIVES - 1;
  }

  restart() {
    this._state = Object.assign({}, InitialState);
  }

  progress(gameResult) {
    this._state[this._state.CURRENT_FRAME] = gameResult;
  }

}

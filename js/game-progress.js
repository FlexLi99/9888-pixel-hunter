import {Constants} from './data/game-state';

export default class GameProgress {
  constructor(state) {
    this.state = state;
  }

  setProgress() {
    let scoreList = ``;

    this.state.PROGRESS.forEach((item) => {
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
  }

  getProgress() {
    return `<ul class="stats">
              ${this.setProgress()}
            </ul>`;
  }

  update() {
    this.getProgress();
  }
}

import AbstractView from '../abstract-view';
//  import {gameStat, gameReset, getNextFrame} from '../game-stat';

const LIVE_VAL = 3;
// const getLives = (state) => {
//   for (const live of LIVE_VAL) {
//     return
//   }
// }

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  gameState() {
    return `
    <h1 class="game__timer">${this.state.TIME}</h1>
    <div class="game__lives">
      ${new Array(this.state.LIVES)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      ${new Array(LIVE_VAL - this.state.LIVES)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>`;
  }

  get template() {
    return `<header class="header">
              <div class="header__back">
                <button class="back">
                  <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                  <img src="img/logo_small.svg" width="101" height="44">
                </button>
              </div>
              ${this.state ? this.gameState() : ``}
            </header>`;
  }

  bind() {
    const resetGame = this.element.querySelector(`.header__back`);

    const backHandler = (event) => {
      if (event.target.closest(`.header__back`)) {
        // gameReset();
        // getNextFrame(1);
      }
    };

    resetGame.addEventListener(`click`, backHandler);
  }
}

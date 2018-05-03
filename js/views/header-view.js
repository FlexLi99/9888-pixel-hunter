import AbstractView from '../abstract-view';
import MainApp from '../main-app';

const LIVE_VAL = 3;

export default class HeaderView extends AbstractView {
  constructor(stateVis, model) {
    super();
    this.visible = stateVis;
    this.model = model;
    this.state = model.state;
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
              ${this.visible ? this.gameState() : ``}
            </header>`;
  }

  onRestart() {
    MainApp.showGreeting();
    this.model.restart();
  }

  bind() {
    const resetGame = this.element.querySelector(`.header__back`);

    const backHandler = (event) => {
      if (event.target.closest(`.header__back`)) {
        this.onRestart();
      }
    };

    resetGame.addEventListener(`click`, backHandler);
  }
}

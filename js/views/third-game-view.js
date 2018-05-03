import {Games} from '../data/game-data';
import AbstractView from '../abstract-view';
import GameProgress from '../game-progress';

export default class ThirdGameView extends AbstractView {
  constructor(data) {
    super();
    this.progress = new GameProgress(data);
  }

  get template() {
    return `<div class="game">
              <p class="game__task">${Games[`GAME-3`].desc}</p>
              <form class="game__content  game__content--triple">
              ${Games[`GAME-3`].answers.map((answer) => `
                <div class="game__option${answer.answer === `paint` ? ` game__option--selected` : ``}">
                  <img src="${answer.src}" alt="${answer.alt}" width="304" height="455">
                </div>
                `).join(``)}
              </form>
              <div class="stats">
                ${this.progress.getProgress()}
              </div>
            </div>`;
  }

  onAnswer() {}

  bind() {
    const gameContent = this.element.querySelector(`.game__content`);
    const answerHandler = (event) => {
      const target = event.target;
      const rightAnswer = target.matches(`.game__option--selected`);

      if (target.closest(`.game__option`)) {
        if (rightAnswer) {
          this.onAnswer(true);
        } else {
          this.onAnswer(false);
        }
      }
    };

    gameContent.addEventListener(`click`, answerHandler);
  }
}

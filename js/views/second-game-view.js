import {Games, Service} from '../data/game-data';
import AbstractView from '../abstract-view';
import GameProgress from '../game-progress';

export default class SecondGameView extends AbstractView {
  constructor(data) {
    super();
    this.progress = new GameProgress(data);
  }

  get template() {
    return `<div class="game">
              <p class="game__task">${Games[`GAME-2`].desc}</p>
              <form class="game__content  game__content--wide">
                ${Games[`GAME-2`].answers.map((answer) => `
                  <div class="game__option">
                    <img src="${answer.src}" alt="${answer.alt}" width="705" height="455">
                    <label class="game__answer  game__answer--photo">
                      <input name="${answer.question}" type="radio" value="photo">
                      <span>${Service.PHOTO}</span>
                    </label>
                    <label class="game__answer  game__answer--wide  game__answer--paint">
                      <input name="${answer.question}" type="radio" value="paint">
                      <span>${Service.PAINT}</span>
                    </label>
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
      const rightAnswer = JSON.stringify(Games[`GAME-2`].answers.map((answer) => answer.answer));
      if (target.checked) {
        if (JSON.stringify(new Array(target.value)) !== rightAnswer) {
          this.onAnswer(false);
        } else {
          this.onAnswer(true);
        }
      }
    };

    gameContent.addEventListener(`change`, answerHandler);
  }
}

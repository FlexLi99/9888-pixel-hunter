import {Service} from '../data/game-data';
import AbstractView from '../abstract-view';
import GameProgress from '../game-progress';

export default class SecondGameView extends AbstractView {
  constructor(data, game) {
    super();
    this.game = game;
    this.progress = new GameProgress(data);
  }

  get template() {
    return `<div class="game">
              <p class="game__task">${this.game.question}</p>
              <form class="game__content  game__content--wide">
                ${this.game.answers.map((answer) => `
                  <div class="game__option">
                    <img src="${answer.image.url}" alt="" width="${answer.image.width}" height="${answer.image.height}">
                    <label class="game__answer  game__answer--photo">
                      <input name="photo" type="radio" value="${answer.type}">
                      <span>${Service.PHOTO}</span>
                    </label>
                    <label class="game__answer  game__answer--wide  game__answer--paint">
                      <input name="paint" type="radio" value="${answer.type}">
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
      const rightAnswer = JSON.stringify(this.game.answers.map((answer) => answer.type));
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

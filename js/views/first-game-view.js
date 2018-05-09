import {Service} from '../data/game-data';
import AbstractView from '../abstract-view';
import GameProgress from '../game-progress';

export default class FirstGameView extends AbstractView {
  constructor(data, game) {
    super();
    this.game = game;
    this.progress = new GameProgress(data);
  }

  get template() {
    return `<div class="game">
              <p class="game__task">${this.game.question}</p>
              <form class="game__content">
                ${this.game.answers.map((answer, index) => `
                  <div class="game__option">
                    <img src="${answer.image.url}" alt="" width="${answer.image.width}" height="${answer.image.height}">
                    <label class="game__answer game__answer--photo">
                      <input name="question${index}" type="radio" value="photo">
                      <span>${Service.PHOTO}</span>
                    </label>
                    <label class="game__answer game__answer--paint">
                      <input name="question${index}" type="radio" value="painting">
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
    const answersInput = this.element.querySelectorAll(`.game__answer input`);
    const gameContent = this.element.querySelector(`.game__content`);
    const answerHandler = () => {
      const answers = [...answersInput];
      const userChoices = answers.filter((answer) => answer.checked);
      const rightAnswer = JSON.stringify(this.game.answers.map((answer) => answer.type));

      if (userChoices.length === 2) {
        if (JSON.stringify(userChoices.map((answer) => answer.value)) !== rightAnswer) {
          this.onAnswer(false);
        } else {
          this.onAnswer(true);
        }
      }
    };

    gameContent.addEventListener(`change`, answerHandler);
  }
}

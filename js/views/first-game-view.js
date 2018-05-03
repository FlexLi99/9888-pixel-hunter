import {Games, Service} from '../data/game-data';
import AbstractView from '../abstract-view';
import GameProgress from '../game-progress';

export default class FirstGameView extends AbstractView {
  constructor(data) {
    super();
    this.progress = new GameProgress(data);
  }

  get template() {
    return `<div class="game">
              <p class="game__task">${Games[`GAME-1`].desc}</p>
              <form class="game__content">
                ${Games[`GAME-1`].answers.map((answer) => `
                  <div class="game__option">
                    <img src="${answer.src}" alt="${answer.alt}" width="468" height="458">
                    <label class="game__answer game__answer--photo">
                      <input name="${answer.question}" type="radio" value="photo">
                      <span>${Service.PHOTO}</span>
                    </label>
                    <label class="game__answer game__answer--paint">
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
    const answersInput = this.element.querySelectorAll(`.game__answer input`);
    const gameContent = this.element.querySelector(`.game__content`);
    const answerHandler = () => {
      const answers = [...answersInput];
      const userChoices = answers.filter((answer) => answer.checked);
      const rightAnswer = JSON.stringify(Games[`GAME-1`].answers.map((answer) => answer.answer));

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

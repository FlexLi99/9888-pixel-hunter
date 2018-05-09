import AbstractView from '../abstract-view';
import GameProgress from '../game-progress';

export default class ThirdGameView extends AbstractView {
  constructor(data, game) {
    super();
    this.game = game;
    this.progress = new GameProgress(data);
  }

  get template() {
    return `<div class="game">
              <p class="game__task">${this.game.question}</p>
              <form class="game__content  game__content--triple">
              ${this.game.answers.map((answer) => `
                <div class="game__option${answer.type === `painting` ? ` game__option--selected` : ``}">
                  <img src="${answer.image.url}" alt="" width="${answer.image.width}" height="${answer.image.height}">
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

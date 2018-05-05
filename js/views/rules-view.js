import {InfoFrames} from '../data/game-data';
import AbstractView from '../abstract-view';
import MainApp from '../main-app';

export default class IntroView extends AbstractView {
  constructor() {
    super();
    this.content = {
      title: InfoFrames.RULES.title,
      text: InfoFrames.RULES.text
    };
  }

  get template() {
    return `<div class="rules">
              <h1 class="rules__title">${this.content.title}</h1>
              <p class="rules__description">${this.content.text}</p>
              <form class="rules__form">
                <input class="rules__input" type="text" placeholder="Ваше Имя">
                <button class="rules__button  continue" type="submit" disabled>Go!</button>
              </form>
            </div>`;
  }

  bind() {
    const rulesInput = this.element.querySelector(`.rules__input`);
    const rulesForm = this.element.querySelector(`.rules__form`);

    const inputHandler = () => {
      const nextBtn = rulesInput.nextElementSibling;

      if (rulesInput.value !== ``) {
        nextBtn.removeAttribute(`disabled`);
      } else {
        nextBtn.setAttribute(`disabled`, `disabled`);
      }
    };
    const submitHandler = (evt) => {
      evt.preventDefault();
      MainApp.showGameScreen();
    };

    rulesInput.addEventListener(`input`, inputHandler);
    rulesForm.addEventListener(`submit`, submitHandler);
  }
}

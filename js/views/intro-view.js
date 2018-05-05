import {InfoFrames} from '../data/game-data';
import AbstractView from '../abstract-view';
import MainApp from '../main-app';

export default class IntroView extends AbstractView {
  constructor() {
    super();
    this.content = InfoFrames.INTRO.text;
  }

  get template() {
    return `<div id="main" class="central__content">
              <div class="intro">
                <h1 class="intro__asterisk">*</h1>
                <p class="intro__motto"><sup>*</sup>${this.content}</p>
              </div>
            </div>`;
  }

  bind() {
    const nextBtn = this.element.querySelector(`.intro__asterisk`);
    const nextStepHandler = () => {
      MainApp.showGreeting();
    };

    nextBtn.addEventListener(`click`, nextStepHandler);
  }
}

import {InfoFrames} from '../data/game-data';
import AbstractView from '../abstract-view';
import MainApp from '../main-app';

export default class IntroView extends AbstractView {
  constructor() {
    super();
    this.content = {
      title: InfoFrames.GREETING.title,
      text: InfoFrames.GREETING.text
    };
  }

  get template() {
    return `<div class="greeting central--blur">
              <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
              <h1 class="greeting__asterisk">*</h1>
              <div class="greeting__challenge">
                <h3>${this.content.title}</h3>
                <p>${this.content.text}</p>
              </div>
              <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
            </div>`;
  }

  bind() {
    const nextBtn = this.element.querySelector(`.greeting__continue`);
    const nextStepHandler = () => {
      MainApp.showRules();
    };

    nextBtn.addEventListener(`click`, nextStepHandler);
  }
}

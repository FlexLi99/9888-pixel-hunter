import frameCreate from '../frame-create';
import {InfoFrames} from '../data/game-data';
import {getNextFrame} from '../game-stat';

const greeting = () => {
  const greetingTemplate = `<div class="greeting central--blur">
                              <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
                              <h1 class="greeting__asterisk">*</h1>
                              <div class="greeting__challenge">
                                <h3>${InfoFrames.greeting.title}</h3>
                                <p>${InfoFrames.greeting.text}</p>
                              </div>
                              <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
                            </div>`;

  const getTemplate = frameCreate(greetingTemplate);

  const nextStepHandler = (event) => {
    if (event.target.closest(`.greeting__continue`)) {
      getNextFrame();
    }
  };


  getTemplate.addEventListener(`click`, nextStepHandler);

  return getTemplate;
};

export default greeting;

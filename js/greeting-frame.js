import frameCreate from './frame-create';
import frameChange from './frame-change';
import {infoFrames, initialState} from './data/game-data';

const greeting = () => {
  const greetingTemplate = `<div class="greeting central--blur">
                              <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
                              <h1 class="greeting__asterisk">*</h1>
                              <div class="greeting__challenge">
                                <h3>${infoFrames.greeting.title}</h3>
                                <p>${infoFrames.greeting.text}</p>
                              </div>
                              <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
                            </div>`;

  const getTemplate = frameCreate(greetingTemplate);

  const nextStepHandler = (event) => {
    if (event.target.closest(`.greeting__continue`)) {
      frameChange(++initialState.currentFrame);
    }
  };


  getTemplate.addEventListener(`click`, nextStepHandler);

  return getTemplate;
};

export default greeting;

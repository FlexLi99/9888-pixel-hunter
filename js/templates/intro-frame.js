import frameCreate from '../frame-create';
import {getNextFrame} from '../game-stat';
import {InfoFrames} from '../data/game-data';

const intro = () => {
  const introTemplate = `<div id="main" class="central__content">
                          <div class="intro">
                            <h1 class="intro__asterisk">*</h1>
                            <p class="intro__motto"><sup>*</sup>${InfoFrames.intro.text}</p>
                          </div>
                        </div>`;

  const nextStepHandler = (event) => {
    if (event.target.closest(`.intro__asterisk`)) {
      getNextFrame();
    }
  };

  const getTemplate = frameCreate(introTemplate);

  getTemplate.addEventListener(`click`, nextStepHandler);

  return getTemplate;
};

export default intro;

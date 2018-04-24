import frameCreate from './frame-create';
import frameChange from './frame-change';
import {infoFrames, initialState} from './data/game-data';

const intro = () => {
  const introTemplate = `<div id="main" class="central__content">
                          <div class="intro">
                            <h1 class="intro__asterisk">*</h1>
                            <p class="intro__motto"><sup>*</sup>${infoFrames.intro.text}</p>
                          </div>
                        </div>`;

  const nextStepHandler = (event) => {
    if (event.target.closest(`.intro__asterisk`)) {
      frameChange(++initialState.currentFrame);
    }
  };

  const getTemplate = frameCreate(introTemplate);

  getTemplate.addEventListener(`click`, nextStepHandler);

  return getTemplate;
};

export default intro;

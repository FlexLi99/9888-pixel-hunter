import frameCreate from './frame-create';
import frameChange from './frame-change';
import getHeader from './header';
import {infoFrames, initialState} from './data/game-data';

const rules = () => {
  const rulesTemplate = `${getHeader(false)}
                        <div class="rules">
                          <h1 class="rules__title">${infoFrames.rules.title}</h1>
                          <p class="rules__description">${infoFrames.rules.text}</p>
                          <form class="rules__form">
                            <input class="rules__input" type="text" placeholder="Ваше Имя">
                            <button class="rules__button  continue" type="submit" disabled>Go!</button>
                          </form>
                        </div>`;

  const inputHandler = (event) => {
    const target = event.target;

    if (!target.classList.contains(`rules__input`)) {
      return;
    } else {
      const nextBtn = target.nextElementSibling;

      if (target.value !== ``) {
        nextBtn.removeAttribute(`disabled`);
      } else {
        nextBtn.setAttribute(`disabled`, `disabled`);
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    frameChange(++initialState.frame);
  };

  const backHandler = (event) => {
    if (event.target.closest(`.header__back`)) {
      frameChange(initialState.frame = 1);
    }
  };

  const getTemplate = frameCreate(rulesTemplate);

  getTemplate.addEventListener(`input`, inputHandler);
  getTemplate.addEventListener(`submit`, submitHandler);
  document.addEventListener(`click`, backHandler);

  return getTemplate;
};

export default rules;

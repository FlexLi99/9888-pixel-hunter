import frameCreate from '../frame-create';
import getHeader from './header';
import {InfoFrames} from '../data/game-data';
import {getNextFrame} from '../game-stat';

export default () => {
  const rulesTemplate = `${getHeader(false)}
                        <div class="rules">
                          <h1 class="rules__title">${InfoFrames.RULES.TITLE}</h1>
                          <p class="rules__description">${InfoFrames.RULES.TEXT}</p>
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
    getNextFrame();
  };

  const getTemplate = frameCreate(rulesTemplate);

  getTemplate.addEventListener(`input`, inputHandler);
  getTemplate.addEventListener(`submit`, submitHandler);

  return getTemplate;
};

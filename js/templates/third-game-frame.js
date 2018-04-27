import frameCreate from '../frame-create';
import getHeader from './header';
import {setValidAnswer, setErrorAnswer} from '../game-stat';
import {Games} from '../data/game-data';
import {getScoreStat} from '../game-indicator';

export default () => {
  const thirdGameTemplate = `<div class="game">
                              <p class="game__task">${Games[`GAME-3`].desc}</p>
                              <form class="game__content  game__content--triple">
                              ${Games[`GAME-3`].answers.map((answer) => `
                                <div class="game__option${answer.answer === `paint` ? ` game__option--selected` : ``}">
                                  <img src="${answer.src}" alt="${answer.alt}" width="304" height="455">
                                </div>
                                `).join(``)}
                              </form>
                              <div class="stats">
                                ${getScoreStat()}
                              </div>
                            </div>`;

  const getTemplate = frameCreate(thirdGameTemplate);
  const game = getTemplate.querySelector(`.game`);
  const answerHandler = (event) => {
    const target = event.target;

    if (target.closest(`.game__option`)) {
      if (target.matches(`.game__option--selected`)) {
        setValidAnswer();
      } else {
        setErrorAnswer();
      }
    }
  };

  getTemplate.insertBefore(getHeader(true), game);
  getTemplate.addEventListener(`click`, answerHandler);

  return getTemplate;
};

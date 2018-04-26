import frameCreate from '../frame-create';
import getHeader from './header';
import {errorAnswerHandler, validAnswerHandler} from '../game-stat';
import {Games} from '../data/game-data';
import {getScoreStat} from '../game-indicator';

const thirdGame = () => {
  const thirdGameTemplate = `${getHeader(true)}
                            <div class="game">
                              <p class="game__task">${Games[`game-3`].desc}</p>
                              <form class="game__content  game__content--triple">
                              ${Games[`game-3`].answers.map((answer) => `
                                <div class="game__option${answer.rightAnswer === `paint` ? ` game__option--selected` : ``}">
                                  <img src="${answer.imgSrc}" alt="${answer.imgAlt}" width="304" height="455">
                                </div>
                                `).join(``)}
                              </form>
                              <div class="stats">
                                ${getScoreStat()}
                              </div>
                            </div>`;

  const getTemplate = frameCreate(thirdGameTemplate);

  const answerHandler = (event) => {
    const target = event.target;

    if (target.closest(`.game__option`)) {
      if (target.matches(`.game__option--selected`)) {
        validAnswerHandler();
      } else {
        errorAnswerHandler();
      }
    }
  };

  getTemplate.addEventListener(`click`, answerHandler);

  return getTemplate;
};

export default thirdGame;

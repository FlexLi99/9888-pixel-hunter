import frameCreate from '../frame-create';
import getHeader from './header';
import {setValidAnswer, setErrorAnswer} from '../game-stat';
import {Games} from '../data/game-data';
import {getScoreStat} from '../game-indicator';

export default () => {
  const thirdGameTemplate = `${getHeader(true)}
                            <div class="game">
                              <p class="game__task">${Games[`GAME-3`].DESC}</p>
                              <form class="game__content  game__content--triple">
                              ${Games[`GAME-3`].ANSWERS.map((answer) => `
                                <div class="game__option${answer.RIGHTANSWER === `paint` ? ` game__option--selected` : ``}">
                                  <img src="${answer.IMGSRC}" alt="${answer.IMGALT}" width="304" height="455">
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
        setValidAnswer();
      } else {
        setErrorAnswer();
      }
    }
  };

  getTemplate.addEventListener(`click`, answerHandler);

  return getTemplate;
};

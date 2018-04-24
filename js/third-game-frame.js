import frameCreate from './frame-create';
import getHeader from './header';
import {getScoreStat, errorAnswer, validAnswer} from './game-stat';
import {games} from './data/game-data';

const thirdGame = () => {
  const thirdGameTemplate = `${getHeader(true)}
                            <div class="game">
                              <p class="game__task">${games[`game-3`].desc}</p>
                              <form class="game__content  game__content--triple">
                              ${games[`game-3`].answers.map((answer) => `
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
        validAnswer();
      } else {
        errorAnswer();
      }
    }
  };

  getTemplate.addEventListener(`click`, answerHandler);

  return getTemplate;
};

export default thirdGame;

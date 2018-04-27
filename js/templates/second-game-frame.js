import frameCreate from '../frame-create';
import getHeader from './header';
import {setValidAnswer, setErrorAnswer} from '../game-stat';
import {Games, Service} from '../data/game-data';
import {getScoreStat} from '../game-indicator';

export default () => {
  const secondGameTemplate = `<div class="game">
                              <p class="game__task">${Games[`GAME-2`].desc}</p>
                              <form class="game__content  game__content--wide">
                                ${Games[`GAME-2`].answers.map((answer) => `
                                  <div class="game__option">
                                    <img src="${answer.src}" alt="${answer.alt}" width="705" height="455">
                                    <label class="game__answer  game__answer--photo">
                                      <input name="${answer.question}" type="radio" value="photo">
                                      <span>${Service.PHOTO}</span>
                                    </label>
                                    <label class="game__answer  game__answer--wide  game__answer--paint">
                                      <input name="${answer.question}" type="radio" value="paint">
                                      <span>${Service.PAINT}</span>
                                    </label>
                                  </div>
                                `).join(``)}
                              </form>
                              <div class="stats">
                                ${getScoreStat()}
                              </div>
                            </div>`;

  const getTemplate = frameCreate(secondGameTemplate);
  const game = getTemplate.querySelector(`.game`);
  const answerHandler = (event) => {
    const target = event.target;
    if (target.closest(`.game__answer`) && target.checked) {
      if (JSON.stringify(new Array(target.value)) !== JSON.stringify(Games[`GAME-2`].answers.map((answer) => answer.answer))) {
        setErrorAnswer();
      } else {
        setValidAnswer();
      }
    }
  };

  getTemplate.insertBefore(getHeader(true), game);
  getTemplate.addEventListener(`change`, answerHandler);

  return getTemplate;
};

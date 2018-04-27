import frameCreate from '../frame-create';
import getHeader from './header';
import {setValidAnswer, setErrorAnswer} from '../game-stat';
import {Games, Service} from '../data/game-data';
import {getScoreStat} from '../game-indicator';

export default () => {
  const firstGameTemplate = `<div class="game">
                              <p class="game__task">${Games[`GAME-1`].desc}</p>
                              <form class="game__content">
                                ${Games[`GAME-1`].answers.map((answer) => `
                                  <div class="game__option">
                                    <img src="${answer.src}" alt="${answer.alt}" width="468" height="458">
                                    <label class="game__answer game__answer--photo">
                                      <input name="${answer.question}" type="radio" value="photo">
                                      <span>${Service.PHOTO}</span>
                                    </label>
                                    <label class="game__answer game__answer--paint">
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

  const getTemplate = frameCreate(firstGameTemplate);
  const game = getTemplate.querySelector(`.game`);

  getTemplate.insertBefore(getHeader(true), game);

  const answerHandler = (event) => {
    const target = event.target;
    const answers = [...getTemplate.querySelectorAll(`.game__answer input`)];
    const userChoices = answers.filter((answer) => answer.checked);

    if (target.closest(`.game__answer`)) {
      if (userChoices.length === 2) {
        if (JSON.stringify(userChoices.map((answer) => answer.value)) !== JSON.stringify(Games[`GAME-1`].answers.map((answer) => answer.answer))) {
          setErrorAnswer();
        } else {
          setValidAnswer();
        }
      }
    }
  };

  getTemplate.addEventListener(`change`, answerHandler);

  return getTemplate;
};

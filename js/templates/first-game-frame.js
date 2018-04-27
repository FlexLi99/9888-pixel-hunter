import frameCreate from '../frame-create';
import getHeader from './header';
import {setValidAnswer, setErrorAnswer} from '../game-stat';
import {Games, Service} from '../data/game-data';
import {getScoreStat} from '../game-indicator';

export default () => {
  const firstGameTemplate = `${getHeader(true)}
                            <div class="game">
                              <p class="game__task">${Games[`GAME-1`].DESC}</p>
                              <form class="game__content">
                                ${Games[`GAME-1`].ANSWERS.map((answer) => `
                                  <div class="game__option">
                                    <img src="${answer.IMGSRC}" alt="${answer.IMGALT}" width="468" height="458">
                                    <label class="game__answer game__answer--photo">
                                      <input name="${answer.QUESTNAME}" type="radio" value="photo">
                                      <span>${Service.PHOTO}</span>
                                    </label>
                                    <label class="game__answer game__answer--paint">
                                      <input name="${answer.QUESTNAME}" type="radio" value="paint">
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

  const answerHandler = (event) => {
    const target = event.target;
    const answers = [...getTemplate.querySelectorAll(`.game__answer input`)];
    const userChoices = answers.filter((answer) => answer.checked);

    if (target.closest(`.game__answer`)) {
      if (userChoices.length === 2) {
        if (JSON.stringify(userChoices.map((answer) => answer.value)) !== JSON.stringify(Games[`GAME-1`].ANSWERS.map((answer) => answer.RIGHTANSWER))) {
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

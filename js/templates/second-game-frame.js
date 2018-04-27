import frameCreate from '../frame-create';
import getHeader from './header';
import {setValidAnswer, setErrorAnswer} from '../game-stat';
import {Games, Service} from '../data/game-data';
import {getScoreStat} from '../game-indicator';

export default () => {
  const secondGameTemplate = `${getHeader(true)}
                            <div class="game">
                              <p class="game__task">${Games[`GAME-2`].DESC}</p>
                              <form class="game__content  game__content--wide">
                                ${Games[`GAME-2`].ANSWERS.map((answer) => `
                                  <div class="game__option">
                                    <img src="${answer.IMGSRC}" alt="${answer.IMGALT}" width="705" height="455">
                                    <label class="game__answer  game__answer--photo">
                                      <input name="${answer.QUESTNAME}" type="radio" value="photo">
                                      <span>${Service.PHOTO}</span>
                                    </label>
                                    <label class="game__answer  game__answer--wide  game__answer--paint">
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

  const getTemplate = frameCreate(secondGameTemplate);

  const answerHandler = (event) => {
    const target = event.target;
    if (target.closest(`.game__answer`) && target.checked) {
      if (JSON.stringify(new Array(target.value)) !== JSON.stringify(Games[`GAME-2`].ANSWERS.map((answer) => answer.RIGHTANSWER))) {
        setErrorAnswer();
      } else {
        setValidAnswer();
      }
    }
  };

  getTemplate.addEventListener(`change`, answerHandler);

  return getTemplate;
};

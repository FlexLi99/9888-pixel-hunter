import frameCreate from './frame-create';
import frameChange from './frame-change';
import getHeader from './header';
import {getScoreStat, errorAnswer, validAnswer} from './game-stat';
import {initialState, games, service} from './data/game-data';

const secondGame = () => {
  const secondGameTemplate = `${getHeader(true)}
                            <div class="game">
                              <p class="game__task">${games[`game-2`].desc}</p>
                              <form class="game__content  game__content--wide">
                                ${games[`game-2`].answers.map((answer) => `
                                  <div class="game__option">
                                    <img src="${answer.imgSrc}" alt="${answer.imgAlt}" width="705" height="455">
                                    <label class="game__answer  game__answer--photo">
                                      <input name="${answer.questName}" type="radio" value="photo">
                                      <span>${service.photo}</span>
                                    </label>
                                    <label class="game__answer  game__answer--wide  game__answer--paint">
                                      <input name="${answer.questName}" type="radio" value="paint">
                                      <span>${service.paint}</span>
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
      if (JSON.stringify(new Array(target.value)) !== JSON.stringify(games[`game-2`].answers.map((answer) => answer.rightAnswer))) {
        errorAnswer();
      } else {
        validAnswer();
      }
      frameChange(++initialState.frame);
    }
  };

  getTemplate.addEventListener(`change`, answerHandler);

  return getTemplate;
};

export default secondGame;

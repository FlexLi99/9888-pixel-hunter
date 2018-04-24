import frameCreate from './frame-create';
import frameChange from './frame-change';
import getHeader from './header';
import {getScoreStat, errorAnswer, validAnswer} from './game-stat';
import {initialState, games, service} from './data/game-data';


const firstGame = () => {
  const firstGameTemplate = `${getHeader(true)}
                            <div class="game">
                              <p class="game__task">${games[`game-1`].desc}</p>
                              <form class="game__content">
                                ${games[`game-1`].answers.map((answer) => `
                                  <div class="game__option">
                                    <img src="${answer.imgSrc}" alt="${answer.imgAlt}" width="468" height="458">
                                    <label class="game__answer game__answer--photo">
                                      <input name="${answer.questName}" type="radio" value="photo">
                                      <span>${service.photo}</span>
                                    </label>
                                    <label class="game__answer game__answer--paint">
                                      <input name="${answer.questName}" type="radio" value="paint">
                                      <span>Рисунок</span>
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
    const userChoise = answers.filter((answer) => answer.checked);

    if (target.closest(`.game__answer`)) {
      if (userChoise.length === 2) {
        if (JSON.stringify(userChoise.map((answer) => answer.value)) !== JSON.stringify(games[`game-1`].answers.map((answer) => answer.rightAnswer))) {
          errorAnswer();
        } else {
          validAnswer();
        }
        frameChange(++initialState.frame);
      }
    }
  };

  getTemplate.addEventListener(`change`, answerHandler);

  return getTemplate;
};

export default firstGame;

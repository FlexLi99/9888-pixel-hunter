import {getNextFrame, gameReset, gameStat} from '../game-stat';

const LIVE_VAL = 3;

const getLives = () => {
  const liveStatTemplate = `
    <h1 class="game__timer">${gameStat.time}</h1>
    <div class="game__lives">
      ${new Array(gameStat.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      ${new Array(LIVE_VAL - gameStat.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>`;

  return liveStatTemplate;
};

const getHeader = (statShow) => {
  const headerTemplate = `
  <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      ${statShow ? getLives() : ``}
    </header>`;

  const backHandler = (event) => {
    if (event.target.closest(`.header__back`)) {
      gameReset();
      getNextFrame(1);
    }
  };

  document.addEventListener(`click`, backHandler);
  return headerTemplate;
};

export default getHeader;

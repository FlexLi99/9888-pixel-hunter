import {getGameStat} from './game-stat';

const getHeader = (statShow) => {
  const headerTemplate = `
  <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      ${(statShow) ? getGameStat() : ``}
    </header>`;

  return headerTemplate;
};

export default getHeader;

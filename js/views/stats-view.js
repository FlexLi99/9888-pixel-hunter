import {gamesResult, Constants} from '../data/game-state';
import AbstractView from '../abstract-view';

export default class FirstGameView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div class="result">
              <h1>${gamesResult[gamesResult.length - 1].gameStatus}</h1>
              ${gamesResult.reverse().map((result, index) => `
                <table class="result__table">
                  <tr>
                    <td class="result__number">${index + 1}.</td>
                    <td colspan="2">
                      ${result.resultLine}
                    </td>
                    ${(result.resultScore !== -1) ? `
                      <td class="result__points">×&nbsp;${Constants.BONUS * 2}</td>
                      <td class="result__total">${result.correct() * Constants.BONUS * 2}</td>
                    ` : `
                      <td class="result__points"></td>
                      <td class="result__total">fail</td>
                    `}
                  </tr>
                  ${(result.fastCount > 0) ? `
                    <tr>
                      <td></td>
                      <td class="result__extra">Бонус за скорость:</td>
                      <td class="result__extra">${result.fastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                      <td class="result__points">×&nbsp;${Constants.BONUS}</td>
                      <td class="result__total">${result.fastCount * Constants.BONUS}</td>
                    </tr>
                  ` : ``}
                  ${(result.restLives > 0) ? `
                    <tr>
                      <td></td>
                      <td class="result__extra">Бонус за жизни:</td>
                      <td class="result__extra">${result.restLives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                      <td class="result__points">×&nbsp;${Constants.BONUS}</td>
                      <td class="result__total">${result.restLives * Constants.BONUS}</td>
                    </tr>
                  ` : ``}
                  ${(result.slowCount > 0) ? `
                    <tr>
                      <td></td>
                      <td class="result__extra">Штраф за медлительность:</td>
                      <td class="result__extra">${result.slowCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                      <td class="result__points">×&nbsp;${Constants.BONUS}</td>
                      <td class="result__total">-${result.slowCount * Constants.BONUS}</td>
                    </tr>
                  ` : ``}
                  ${(result.resultScore !== -1) ? `
                    <tr>
                      <td colspan="5" class="result__total  result__total--final">${result.resultScore}</td>
                    </tr>
                  ` : ``}
                </table>
                `).join(``)}
            </div>`;
  }

  bind() {}
}

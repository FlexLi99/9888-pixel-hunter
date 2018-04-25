import frameCreate from './frame-create';
import getHeader from './header';
import {gamesResult} from './game-stat';

const BONUS = 50;

const stats = () => {
  const statsTemplate = `${getHeader(false)}
                          <div class="result">
                            <h1>Победа!</h1>
                            ${gamesResult.map((result, index) => `
                              <table class="result__table">
                                <tr>
                                  <td class="result__number">${index + 1}.</td>
                                  <td colspan="2">
                                    ${result.resultLine}
                                  </td>
                                  ${(result.resultScore !== -1) ? new Array(result.fastCount).fill(`
                                    <td class="result__points">×&nbsp;${BONUS * 2}</td>
                                    <td class="result__total">${result.resultScore}</td>
                                  `).join(``) : new Array(result.fastCount).fill(`
                                    td class="result__points"></td>
                                    <td class="result__total">fail</td>
                                  `).join(``)}
                                </tr>
                                ${(result.fastCount > 0) ? new Array(result.fastCount).fill(`
                                  <tr>
                                    <td></td>
                                    <td class="result__extra">Бонус за скорость:</td>
                                    <td class="result__extra">${result.fastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                                    <td class="result__points">×&nbsp;${BONUS}</td>
                                    <td class="result__total">${result.fastCount * BONUS}</td>
                                  </tr>
                                `).join(``) : ``}
                                ${(result.restLives > 0) ? new Array(result.restLives).fill(`
                                  <tr>
                                    <td></td>
                                    <td class="result__extra">Бонус за жизни:</td>
                                    <td class="result__extra">${result.restLives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                                    <td class="result__points">×&nbsp;${BONUS}</td>
                                    <td class="result__total">${result.restLives * BONUS}</td>
                                  </tr>
                                `).join(``) : ``}
                                ${(result.slowCount > 0) ? new Array(result.slowCount).fill(`
                                  <tr>
                                    <td></td>
                                    <td class="result__extra">Штраф за медлительность:</td>
                                    <td class="result__extra">${result.slowCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                                    <td class="result__points">×&nbsp;${BONUS}</td>
                                    <td class="result__total">-${result.slowCount * BONUS}</td>
                                  </tr>
                                `).join(``) : ``}
                                ${(result.resultScore !== -1) ? new Array(result.resultScore).fill(`
                                  <tr>
                                    <td colspan="5" class="result__total  result__total--final">${result.resultScore}</td>
                                  </tr>
                                `).join(``) : ``}
                              </table>
                              `).join(``)}
                          </div>`;

  const getTemplate = frameCreate(statsTemplate);

  return getTemplate;
};

export default stats;

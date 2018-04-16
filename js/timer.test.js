import {assert} from 'chai';
import {gameTimer} from './timer';

describe(`Testing for gameTimer function`, () => {
  it(`Time is number`, () => {
    assert.isNumber(gameTimer(30).val);
  });

  it(`Time is not number`, () => {
    assert.isNotNumber(gameTimer(`30`).val);
  });

  it(`Time is running`, () => {
    const timer = gameTimer(30);

    assert.equal(29, timer.tick().val);
    assert.equal(28, timer.tick().val);
    assert.equal(27, timer.tick().val);
  });

  it(`Time is over`, () => {
    const timer = gameTimer(0);

    assert.isFalse(timer.tick());
  });
});

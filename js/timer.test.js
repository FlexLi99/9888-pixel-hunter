import {assert} from 'chai';
import {setGameTimer} from './timer';

describe(`Testing for gameTimer function`, () => {
  it(`Time is number`, () => {
    assert.isNumber(setGameTimer(30).val);
  });

  it(`Time is not number`, () => {
    assert.isNotNumber(setGameTimer(`30`).val);
  });

  it(`Time is running`, () => {
    const timer = setGameTimer(30);

    assert.equal(29, timer.tick().val);
    assert.equal(28, timer.tick().val);
    assert.equal(27, timer.tick().val);
  });

  it(`Time is over`, () => {
    const timer = setGameTimer(0);

    assert.isFalse(timer.tick());
  });
});

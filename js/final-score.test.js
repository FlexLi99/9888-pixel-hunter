import {assert} from 'chai';
import {finalScore} from './final-score';

describe(`Testing for final score function`, () => {
  it(`On entrance only array`, () => {
    assert.equal(finalScore(`undefined`), false);
    assert.equal(finalScore(null), false);
    assert.equal(finalScore(``), false);
    assert.equal(finalScore(1), false);
  });

  it(`On entrance lives rest only number`, () => {
    assert.equal(finalScore([], ``), false);
    assert.equal(finalScore([], null), false);
    assert.equal(finalScore([], `undefined`), false);
    assert.equal(finalScore([], {}), false);
  });

  describe(`Player fail game`, () => {
    it(`Did not answer all questions`, () => {
      assert.equal(finalScore([{}, {}, {}], 3), -1);
    });
  });

  describe(`Player compleate game`, () => {
    it(`All answers valid, midle time, all lives`, () => {
      assert.equal(finalScore([
        {answerResult: 1, answerTime: 11},
        {answerResult: 1, answerTime: 12},
        {answerResult: 1, answerTime: 13},
        {answerResult: 1, answerTime: 14},
        {answerResult: 1, answerTime: 15},
        {answerResult: 1, answerTime: 16},
        {answerResult: 1, answerTime: 17},
        {answerResult: 1, answerTime: 18},
        {answerResult: 1, answerTime: 19},
        {answerResult: 1, answerTime: 20}
      ], 3), 1150);
    });

    it(`3 answers fail, midle time, 0 lives`, () => {
      assert.equal(finalScore([
        {answerResult: 1, answerTime: 11},
        {answerResult: 0, answerTime: 12},
        {answerResult: 1, answerTime: 13},
        {answerResult: 1, answerTime: 14},
        {answerResult: 1, answerTime: 15},
        {answerResult: 0, answerTime: 16},
        {answerResult: 1, answerTime: 17},
        {answerResult: 1, answerTime: 18},
        {answerResult: 1, answerTime: 19},
        {answerResult: 0, answerTime: 20}
      ], 0), 700);
    });

    it(`All answers valid, all answers fast time, all lives`, () => {
      assert.equal(finalScore([
        {answerResult: 1, answerTime: 5},
        {answerResult: 1, answerTime: 6},
        {answerResult: 1, answerTime: 7},
        {answerResult: 1, answerTime: 8},
        {answerResult: 1, answerTime: 9},
        {answerResult: 1, answerTime: 2},
        {answerResult: 1, answerTime: 3},
        {answerResult: 1, answerTime: 4},
        {answerResult: 1, answerTime: 5},
        {answerResult: 1, answerTime: 6}
      ], 3), 1650);
    });

    it(`All answers valid, all answers slow time, all lives`, () => {
      assert.equal(finalScore([
        {answerResult: 1, answerTime: 21},
        {answerResult: 1, answerTime: 22},
        {answerResult: 1, answerTime: 23},
        {answerResult: 1, answerTime: 24},
        {answerResult: 1, answerTime: 25},
        {answerResult: 1, answerTime: 26},
        {answerResult: 1, answerTime: 27},
        {answerResult: 1, answerTime: 28},
        {answerResult: 1, answerTime: 29},
        {answerResult: 1, answerTime: 30}
      ], 3), 650);
    });
  });
});

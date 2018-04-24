import intro from './intro-frame';
import greeting from './greeting-frame';
import rules from './rules-frame';
import firstGame from './first-game-frame';
import secondGame from './second-game-frame';
import thirdGame from './third-game-frame';
import stats from './stats-frame';

const shuffling = () => {
  return Math.random() - 0.5;
};

export const gameFrames = [
  firstGame,
  secondGame,
  thirdGame,
  firstGame,
  secondGame,
  thirdGame,
  firstGame,
  secondGame,
  thirdGame,
  firstGame,
].sort(shuffling);

const frames = [
  intro,
  greeting,
  rules,
  stats
];

const lastElem = frames.splice(-1, 1);
export const allAppFrames = frames.concat(gameFrames, lastElem);

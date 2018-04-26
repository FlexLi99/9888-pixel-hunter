import intro from './templates/intro-frame';
import greeting from './templates/greeting-frame';
import rules from './templates/rules-frame';
import firstGame from './templates/first-game-frame';
import secondGame from './templates/second-game-frame';
import thirdGame from './templates/third-game-frame';
import stats from './templates/stats-frame';

const shuffling = () => {
  return Math.random() - 0.5;
};

const gameFrames = [
  firstGame,
  secondGame,
  thirdGame,
  firstGame,
  secondGame,
  thirdGame,
  firstGame,
  secondGame,
  thirdGame,
  firstGame
].sort(shuffling);

const frames = [
  intro,
  greeting,
  rules,
  stats
];

const lastElem = frames.splice(-1, 1);
const allAppFrames = frames.concat(gameFrames, lastElem);

const mainFrame = document.querySelector(`main.central`);
const frameChange = (gameFrame = 0) => {
  mainFrame.innerHTML = ``;
  mainFrame.appendChild(allAppFrames[gameFrame]());
};

export {frameChange, gameFrames, allAppFrames};

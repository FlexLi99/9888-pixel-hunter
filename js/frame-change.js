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

const gameFrames = [
  firstGame,
  secondGame,
  thirdGame
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

  console.log(gameFrames);
};

export {frameChange, gameFrames, allAppFrames};

import {initialState, scoreState} from './data/game-data';
import {gameFrames, allAppFrames} from './game-frames';

initialState.gameFrames = gameFrames.length;
initialState.allFrames = allAppFrames.length;

for (let i = 0; i < initialState.gameFrames; i++) {
  scoreState.push({answerIndic: null});
}

const mainFrame = document.querySelector(`main.central`);
const frameChange = (gameFrame = initialState.currentFrame) => {
  mainFrame.innerHTML = ``;
  mainFrame.appendChild(allAppFrames[gameFrame]());
  console.log(initialState, gameFrame);
  console.log(scoreState);
};

export default frameChange;

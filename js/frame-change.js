import {initialState} from './data/game-data';
import {frames} from './game-frames';

const mainFrame = document.querySelector(`main.central`);
const frameChange = (gameFrame = initialState.frame) => {
  mainFrame.innerHTML = ``;
  mainFrame.appendChild(frames[gameFrame]());
};

export default frameChange;

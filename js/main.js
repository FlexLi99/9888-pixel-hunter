const tempArr = [...document.querySelectorAll(`template`)];
const mainFrame = document.querySelector(`main.central`);
const frameChange = (number) => {
  tempArr.forEach((frame, i) => {
    if (number === i) {
      mainFrame.innerHTML = ``;
      mainFrame.appendChild(frame.content.cloneNode(true));
    }
  });
};
const keyboardSwitch = (e) => {
  if (e.altKey && e.which === 39 && frameNumber < tempArr.length - 1) {
    frameNumber += 1;
    frameChange(frameNumber);
  } else if (e.altKey && e.which === 37 && frameNumber !== 0) {
    frameNumber -= 1;
    frameChange(frameNumber);
  }
};
let frameNumber = 0;

frameChange(frameNumber);
document.addEventListener(`keydown`, (e) => keyboardSwitch(e));

const templates = [...document.querySelectorAll(`template`)];
const mainFrame = document.querySelector(`main.central`);
const frameChange = (number) => {
  const frame = templates[number];
  mainFrame.innerHTML = ``;
  mainFrame.appendChild(frame.content.cloneNode(true));
};
const keyboardHandler = (e) => {
  const ARROW_RIGHT = 39;
  const ARROW_LEFT = 37;
  if (e.altKey && e.which === ARROW_RIGHT && frameNumber < templates.length - 1) {
    frameChange(++frameNumber);
  } else if (e.altKey && e.which === ARROW_LEFT && frameNumber !== 0) {
    frameChange(--frameNumber);
  }
};
let frameNumber = 0;

frameChange(frameNumber);
document.addEventListener(`keydown`, keyboardHandler);

const mainFrame = document.querySelector(`main.central`);
const frameChange = (frameTemplate) => {
  mainFrame.innerHTML = ``;
  mainFrame.appendChild(frameTemplate);
};

export default frameChange;

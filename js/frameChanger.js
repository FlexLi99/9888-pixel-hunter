const mainFrame = document.querySelector(`main.central`);
const frameChange = (getFrameValue) => {
  mainFrame.innerHTML = ``;
  mainFrame.appendChild(getFrameValue);
};

export default frameChange;

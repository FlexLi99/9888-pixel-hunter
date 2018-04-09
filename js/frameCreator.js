const frameCreateFunc = (frameString, frameName) => {
  const frameContainer = document.createElement(`div`);
  const frame = document.getElementById(frameName);

  frameContainer.innerHTML = frameString;
  return frame.content.appendChild(frameContainer);
};

export default frameCreateFunc;

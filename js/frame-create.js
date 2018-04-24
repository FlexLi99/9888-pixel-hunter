import getFooter from './footer';

const frameCreate = (frameString) => {
  const frameContainer = document.createElement(`div`);

  frameContainer.innerHTML = frameString + getFooter;

  return frameContainer;
};

export default frameCreate;

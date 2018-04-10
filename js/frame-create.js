const frameCreate = (frameString) => {
  const frameContainer = document.createElement(`div`);

  frameContainer.innerHTML = frameString;

  return frameContainer;
};

export default frameCreate;

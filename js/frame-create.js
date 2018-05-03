export default (template = ``, tag = `div`) => {
  const frameContainer = document.createElement(tag);

  frameContainer.innerHTML = template;

  return frameContainer.firstChild;
};

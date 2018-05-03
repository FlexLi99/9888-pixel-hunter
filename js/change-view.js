const mainFrame = document.querySelector(`main.central`);
export default (view) => {
  mainFrame.innerHTML = ``;
  mainFrame.appendChild(view);
};

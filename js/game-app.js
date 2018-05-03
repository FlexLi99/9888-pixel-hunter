import FirstGameView from './views/first-game-view';
import SecondGameView from './views/second-game-view';
import ThirdGameView from './views/third-game-view';
import HeaderView from './views/header-view';
import FooterView from './views/footer-view';

export default class GameApp {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = this.chooseGame();
    this.footer = new FooterView();

    this.view = document.createElement(`div`);
    this.view.appendChild(this.header.element);
    this.view.appendChild(this.content.element);
    this.view.appendChild(this.footer.element.firstChild);
  }

  get element() {
    return this.view;
  }

  startGame() {

  }

  chooseGame() {
    const games = [
      new FirstGameView(this.model.state),
      new SecondGameView(this.model.state),
      new ThirdGameView(this.model.state)
    ];
    const shuffling = (min, max) => {
      let random = min + Math.random() * (max + 1 - min);

      random = Math.floor(random);
      return random;
    };
    const gameView = games[shuffling(0, 2)];

    gameView.onAnswer = this.answer.bind(this);

    return gameView;
  }

  answer(answer) {
    if (answer) {
      console.log(true);
    } else {
      console.log(false);
      this.model.die();
      this.model.nextGame({answerResult: 0, answerTime: 0});
      this.changeGame();
      // if (gameStat.LIVES < 0) {
      //   setGameResult(FAIL);
      //   frameChange(gameStat.ALL_FRAMES - 1);
      // } else if (gameStat.CURRENT_FRAME + 1 === gameStat.ALL_FRAMES - 1) {
      //   setGameResult(WIN);
      //   this.model.nextGame({answerResult: 0, answerTime: 0});
      // } else {
      //   this.model.nextGame({answerResult: 0, answerTime: 0});
      // }
    }
  }

  headerUpdate() {
    const newHeader = new HeaderView(this.model.state);

    console.log(this.view, newHeader.element.firstChild, this.header.element);

    this.view.replaceChild(newHeader.element, this.header.element);
    this.header = newHeader;
  }

  changeGame() {
    this.headerUpdate();
    this.changeContentView();
  }

  changeContentView() {
    this.view.replaceChild(this.chooseGame().element, this.content.element);
    this.content = this.chooseGame();
  }
}

import FirstGameView from './views/first-game-view';
import SecondGameView from './views/second-game-view';
import ThirdGameView from './views/third-game-view';
import HeaderView from './views/header-view';
import FooterView from './views/footer-view';
import {Service} from './data/game-data';
import MainApp from './main-app';


const WIN = Service.WIN;
const FAIL = Service.FAIL;

export default class GameApp {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(true, this.model);
    this.content = this.chooseGame();
    this.footer = new FooterView();

    this.view = document.createElement(`div`);
    this.view.appendChild(this.header.element);
    this.view.appendChild(this.content.element);
    this.view.appendChild(this.footer.element);
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
      this.model.setScore({answerResult: 1, answerTime: this.model.state.TIME});

      if (this.model.hasFinish()) {
        this.model.setGameResult(WIN);
        MainApp.showStats();
      }

      this.model.nextGame();
      this.changeGame();
    } else {
      this.model.die();
      this.model.setScore({answerResult: 0, answerTime: 0});

      if (this.model.isFail()) {
        this.model.setGameResult(FAIL);
        MainApp.showStats();

      } else if (this.model.hasFinish()) {
        this.model.setGameResult(WIN);
        MainApp.showStats();

      } else {
        this.changeGame();
        this.model.nextGame();
      }
    }
  }

  changeGame() {
    this.headerUpdate();
    this.changeContentView();
  }

  headerUpdate() {
    const newHeader = new HeaderView(true, this.model);

    this.view.replaceChild(newHeader.element, this.header.element);
    this.header = newHeader;
  }

  changeContentView() {
    this.view.removeChild(this.content.element);
    this.content = this.chooseGame();
    this.view.insertBefore(this.content.element, this.footer.element);
  }
}

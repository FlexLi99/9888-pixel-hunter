import FirstGameView from './views/first-game-view';
import SecondGameView from './views/second-game-view';
import ThirdGameView from './views/third-game-view';
import HeaderView from './views/header-view';
import FooterView from './views/footer-view';
import {Service, QuestionType, Games} from './data/game-data';
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

  chooseGame() {
    const createView = () => {
      const games = [];

      for (const game of Games) {
        switch (game.type) {
          case QuestionType.TINDER_LIKE:
            games.push(new SecondGameView(this.model.state, game));
            break;
          case QuestionType.TWO_OF_TWO:
            games.push(new FirstGameView(this.model.state, game));
            break;
          case QuestionType.ONE_OF_THREE:
            games.push(new ThirdGameView(this.model.state, game));
            break;
        }
      }

      return games[this.model.getCurrentGame()];
    };

    const gameView = createView();

    gameView.onAnswer = this.getAnswer.bind(this);

    return gameView;
  }

  getAnswer(answer) {
    if (answer) {
      this.model.setScore({answerResult: 1, answerTime: this.model.state.TIME});

      if (this.model.hasFinish) {
        this.model.setGameResult(WIN);
        MainApp.showStats();
      } else {
        this.model.getNextGame();
        this.changeGame();
      }
    } else {
      this.model.die();
      this.model.setScore({answerResult: 0, answerTime: 0});

      if (this.model.isFail) {
        this.model.setGameResult(FAIL);
        MainApp.showStats();

      } else if (this.model.hasFinish) {
        this.model.setGameResult(WIN);
        MainApp.showStats();

      } else {
        this.model.getNextGame();
        this.changeGame();
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

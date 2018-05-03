import IntroView from './views/intro-view';
import GreetingView from './views/greeting-view';
import RulesView from './views/rules-view';
import HeaderView from './views/header-view';
import FooterView from './views/footer-view';
import changeView from './change-view';
import GameModel from './data/game-model';
import GameApp from './game-app';

export default class MainApp {
  constructor() {

  }

  static showIntro() {
    const intro = new IntroView();
    const footer = new FooterView();

    intro.element.appendChild(footer.element.firstChild);

    changeView(intro.element);
  }

  static showGreeting() {
    const greeting = new GreetingView();
    const footer = new FooterView();

    greeting.element.appendChild(footer.element.firstChild);

    changeView(greeting.element);
  }

  static showRules() {
    const rules = new RulesView();
    const header = new HeaderView(false);
    const footer = new FooterView();

    rules.element.insertBefore(header.element.firstChild, rules.element.firstChild);
    rules.element.appendChild(footer.element.firstChild);

    changeView(rules.element);
  }

  static startGame() {
    const gameFrame = new GameApp(new GameModel());

    //gameFrame.startGame();
    changeView(gameFrame.element);
  }

  static showStats() {

  }
}

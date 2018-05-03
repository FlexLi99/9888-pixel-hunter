import IntroView from './views/intro-view';
import GreetingView from './views/greeting-view';
import RulesView from './views/rules-view';
import StatsView from './views/stats-view';
import HeaderView from './views/header-view';
import FooterView from './views/footer-view';
import GameApp from './game-app';
import changeView from './change-view';
import GameModel from './data/game-model';

export default class MainApp {
  static showIntro() {
    const intro = new IntroView();
    const footer = new FooterView();
    const template = document.createElement(`div`);

    template.appendChild(intro.element);
    template.appendChild(footer.element);

    changeView(template);
  }

  static showGreeting() {
    const greeting = new GreetingView();
    const footer = new FooterView();
    const template = document.createElement(`div`);

    template.appendChild(greeting.element);
    template.appendChild(footer.element);

    changeView(template);
  }

  static showRules() {
    const rules = new RulesView();
    const header = new HeaderView(false, new GameModel());
    const footer = new FooterView();
    const template = document.createElement(`div`);

    template.appendChild(header.element);
    template.appendChild(rules.element);
    template.appendChild(footer.element);

    changeView(template);
  }

  static startGame() {
    const gameFrame = new GameApp(new GameModel());

    changeView(gameFrame.element);
  }

  static showStats() {
    const stats = new StatsView(new GameModel());
    const header = new HeaderView(false, new GameModel());
    const footer = new FooterView();
    const template = document.createElement(`div`);

    template.appendChild(header.element);
    template.appendChild(stats.element);
    template.appendChild(footer.element);

    changeView(template);
  }
}

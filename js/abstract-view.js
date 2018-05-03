import frameCreate from './frame-create';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);

    return this._element;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  render() {
    return frameCreate(this.template);
  }

  bind() {}
}

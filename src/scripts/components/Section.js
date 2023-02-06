export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items,
      this._renderer = renderer,
      this._container = document.querySelector(containerSelector);
  }

  _clear() {
    this._container.innerHTML = '';
  }
  renderItems() {
    this._clear();
    this._initialArray.forEach((item) => this._renderer(item));
  };

  addItem(item) {
    this._container.prepend(item);
  };
}
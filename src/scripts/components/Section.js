export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  prependAddItem(element) {
    this._container.prepend(element)
  }

  renderItems(elements) {
    elements.forEach(this._renderer)
  }

  addItem(element) {
    this._container.append(element)
  }
}

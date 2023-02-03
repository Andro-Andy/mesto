export class Card {
  constructor(data, itemTemplateSelector, OpenImage) {
    this._data = data
    this._createCard = document
      .querySelector(itemTemplateSelector)
      .content.querySelector(".element")
    this._itemElement = this._createCard.cloneNode(true)
    this._itemDeleteButton = this._itemElement.querySelector(".element__delete")
    this._itemLikeButton = this._itemElement.querySelector(".element__like")
    this._cardImage = this._itemElement.querySelector(".element__image")
    this._openImage = OpenImage
  }
  _getTemplate() {
    const createCard = document
      .querySelector(itemTemplateSelector)
      .content.querySelector(".element")
    return createCard
  }
  _deleteButton = () => {
    this._itemElement.remove()
  }
  _likeButton = () => {
    this._itemLikeButton.classList.toggle("element__like-active")
  }
  _setEventListeners() {
    this._itemLikeButton.addEventListener("click", this._likeButton)
    this._itemDeleteButton.addEventListener("click", this._deleteButton)
    this._cardImage.addEventListener("click", () => this._openImage(this._data))
  }
  createElement() {
    const itemImage = this._itemElement.querySelector(".element__image")
    const itemTitle = this._itemElement.querySelector(".element__title")
    itemTitle.textContent = this._data.name
    itemImage.src = this._data.link
    itemImage.alt = this._data.name

    this._setEventListeners()
    return this._itemElement
  }
}

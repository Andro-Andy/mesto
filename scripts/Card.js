export default class Card {
  constructor(item, elemsTemplate, openImage) {
    this._item = item
    this._elementTemplate = document
      .querySelector(elemsTemplate)
      .content.querySelector(".element")
    this._elementCard = this._elementTemplate.cloneNode(true)
    this._cardImage = this._elementCard.querySelector(".element__image")
    this._elementLikeButton = this._elementCard.querySelector(".element__like")
    this._elementDeleteButton =
      this._elementCard.querySelector(".element__delete")
    this._openImage = openImage
  }

  _deleteButton = () => {
    this._elementCard.remove()
  }

  _likeButton = () => {
    this._elementLikeButton.classList.toggle("element__like-active")
  }

  _setEventListeners() {
    this._elementLikeButton.addEventListener("click", this._likeButton)
    this._elementDeleteButton.addEventListener("click", this._deleteButton)
    this._cardImage.addEventListener("click", () => this._openImage(this._item))
  }

  createCard() {
    const elementImage = this._elementCard.querySelector(".popup__image")
    const elementTitle = this._elementCard.querySelector(".popup__photo-text")
    elementTitle.textContent = this._item.name
    elementImage.src = this._item.link
    elementImage.alt = this._item.name
    this._setEventListeners()
    return this._elementCard
  }
}
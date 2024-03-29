export class Card {
  constructor(data, userId, elementTemplateSelector,
    { handleElementClick, handleLikeClick, handleDeleteBtnClick }) {
    this._data = data
    this._cardId = data._id
    this._userId = userId
    this._elementTemplateSelector = elementTemplateSelector
    this._handleElementClick = handleElementClick
    this._handleLikeClick = handleLikeClick
    this._handleDeleteBtnClick = handleDeleteBtnClick
    this._card = this._getTemplate()
    this._likeCardBtn = this._card.querySelector('.element__like')
    this._elementName = this._card.querySelector('.element__title')
    this._elementLink = this._card.querySelector('.element__image')
    this._deleteCardBtn = this._card.querySelector('.element__delete')
    this._counterLikes = this._card.querySelector('.element__counter-likes')
    this._ownerId = data.owner._id
    this._likes = data.likes
  }

  createElement() {
    this._elementName.textContent = this._data.name
    this._elementLink.src = this._data.link
    this._elementLink.alt = this._data.name
    this.setLikes(this._likes)
    this._addEventListeners()
    this._counterLikes.textContent = this._likes.length
    if (this._ownerId !== this._userId) {
      this._deleteCardBtn.style.display = 'none'
    }

    return this._card
  }

  checkAvailabilityLike() {
    return this._likes.find((like) => {
      return like._id === this._userId
    })
  }

  toggleLikeColor() {
    if (this.checkAvailabilityLike()) {
      this._addLike()
    } else {
      this._deleteLike()
    }
  }


  setLikes(likesList) {
    this._likes = likesList
    this._counterLikes.textContent = this._likes.length
    this.toggleLikeColor()
  }


  _addLike() {
    this._likeCardBtn.classList.add('element__like-active')
  }

  _deleteLike() {
    this._likeCardBtn.classList.remove('element__like-active')
  }

  // ID карточки
  getIdCard() {
    return this._cardId
  }

  _getTemplate() {
    const card = document.querySelector(this._elementTemplateSelector).content.querySelector('.element').cloneNode(true)
    return card
  }

  _addEventListeners = () => {
    this._deleteCardBtn.addEventListener('click', this._handleDeleteCard)

    this._likeCardBtn.addEventListener('click', () => {
      this._handleLikeClick(this._cardId)

      this.toggleLikeColor()

    })
    this._elementLink.addEventListener('click', () =>
      this._handleElementClick(this._data.name, this._data.link),
    )

    this._deleteCardBtn.addEventListener('click', () => {
      this._handleDeleteBtnClick(this._cardId, this)
    })
  }
  deleteElement() {
    this._card.remove();
    this._card = null;
  }


}

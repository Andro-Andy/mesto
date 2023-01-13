export default class Card {
  constructor(data, itemTemplateSelector, handleOpenImage) {
    this._data = data;
    this._itemTemplate = document.querySelector(itemTemplateSelector).content.querySelector('.element');
    this._itemElement = this._itemTemplate.cloneNode(true);
    this._itemDeleteButton = this._itemElement.querySelector('.element__delete');
    this._itemLikeButton = this._itemElement.querySelector('.element__like');
    this._cardImage = this._itemElement.querySelector('.element__image');
    this._handleOpenImage = handleOpenImage;
  }

  _handleLikeButtonClick = () => {
    this._itemLikeButton.classList.toggle('element__like-active');
  }
  _handleDeleteButtonClick = () => {
    this._itemElement.remove();
  }
  _setEventListeners() {
    this._itemLikeButton.addEventListener('click', this._handleLikeButtonClick);
    this._itemDeleteButton.addEventListener('click', this._handleDeleteButtonClick);
    this._cardImage.addEventListener('click', () => this._handleOpenImage(this._data));
  }

  createElement() {
    const itemImage = this._itemElement.querySelector('.popup__image');
    const itemTitle = this._itemElement.querySelector('.popup__photo-text');
    itemTitle.textContent = this._data.name;
    itemImage.src = this._data.link;
    itemImage.alt = this._data.name;
    this._setEventListeners();
    return this._itemElement;
  }
};

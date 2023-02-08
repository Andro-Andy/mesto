export class Card {
  constructor(data, templateSelector, handleOpenImage) {
    this._data = data;
    this._templateSelector = templateSelector,
      this._openImage = handleOpenImage
  }
  _getTemplate() {
    const createElement = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    return createElement;
  }

  _likeButtonClick() {
    this._itemLikeButton.classList.toggle("element__like-active");
  }

  _setEventListeners() {
    this._itemElement.querySelector(".element__delete").addEventListener("click", () => {
      this._itemElement.remove();
    });
    this._itemLikeButton.addEventListener("click", () => {
      this._likeButtonClick();
    });
    this._itemImage.addEventListener("click", () => {
      this._openImage(this._data);
    });
  }

  createElement() {
    this._itemElement = this._getTemplate();
    this._itemLikeButton = this._itemElement.querySelector(".element__like");
    this._itemImage = this._itemElement.querySelector(".element__image");
    this._itemElement.querySelector(".element__title").textContent = this._data.name;
    this._itemImage.alt = this._data.name;
    this._itemImage.src = this._data.link;
    this._setEventListeners();
    return this._itemElement;
  }
}
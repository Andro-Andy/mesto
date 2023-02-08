import {
  Popup
} from './Popup.js';
// Передача данных отрытого елемента
export class PopupWithImage extends Popup {
  constructor({
    selectorPopup
  }) {
    super(selectorPopup);
    this._popupCardImage = this._popup.querySelector('.popup__image');
    this._popupCardText = this._popup.querySelector('.popup__photo-text');
  }
  open(title, link) {
    this._popupCardImage.src = link;
    this._popupCardImage.alt = title;
    this._popupCardText.textContent = title;

    super.open();
  }
}
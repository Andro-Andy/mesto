export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
  }

  open() {
    this._popupElement.classList.add('popup_opened')
    document.addEventListener('keydown', this._escClose)
  }

  close() {
    this._popupElement.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._escClose)
  }

  _escClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('popup') ||
        e.target.classList.contains('popup__container-close')
      ) {
        this.close()
      }
    })
  }
}
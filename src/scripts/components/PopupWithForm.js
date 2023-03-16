import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, checkFormSubmit) {
    super(popupSelector)

    this._checkFormSubmit = checkFormSubmit
    this._formElement = this._popupElement.querySelector('.popup__form')
    this._inputList = this._formElement.querySelectorAll('.popup__form-input')
    this._saveBtn = this._formElement.querySelector('.popup__form-submit')
  }

  saveBtn(text) {
    this._saveBtn.value = text
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name]
    })
  }

  _getInputValues() {
    this._formValues = {}
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value
    })
    return this._formValues
  }

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._checkFormSubmit(this._getInputValues())
    })
  }

  close() {
    super.close()
    this._formElement.reset()
  }
}

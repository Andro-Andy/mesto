export class FormValidator {

  static selectors = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__form-submit",
    inactiveButtonClass: "popup__form-submit_invalid",
    inputErrorClass: "popup__form-input_error",
    errorClass: "popup__error_visibility",
  };
  constructor(formElement) {
    this._formSelector = FormValidator.selectors.formSelector;
    this._inputSelector = FormValidator.selectors.inputSelector;
    this._submitButtonSelector = FormValidator.selectors.submitButtonSelector;
    this._inactiveButtonClass = FormValidator.selectors.inactiveButtonClass;
    this._inputErrorClass = FormValidator.selectors.inputErrorClass;
    this._errorClass = FormValidator.selectors.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _isValid(inputElement) {
    !inputElement.validity.valid ? this._showInputError(inputElement, inputElement.validationMessage) : this._hideInputError(inputElement);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  _setEventListeners() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
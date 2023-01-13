export default class FormValidator {
	constructor(enableValidation, form) {
		this._enableValidation = enableValidation
		this._form = form
		this._inputs = Array.from(
			this._form.querySelectorAll(this._enableValidation.inputSelector)
		)
		this._buttonSave = this._form.querySelector(
			this._enableValidation.submitButtonSelector
		)
	}

	_inputValidity(input) {
		if (!input.validity.valid) {
			this._inputError(input)
		} else {
			this._hideInputError(input)
		}
	}
	_inputError(input) {
		const error = this._form.querySelector(`#${input.id}-error`)
		error.classList.add(this._enableValidation.errorClass)
		input.classList.add(this._enableValidation.inputErrorClass)
		error.textContent = input.validationMessage
	}
	_hideInputError(input) {
		const error = this._form.querySelector(`#${input.id}-error`)
		input.classList.remove(this._enableValidation.inputErrorClass)
		error.classList.remove(this._enableValidation.errorClass)
		error.textContent = ""
	}
	_toggleButton() {
		const isFormValid = Array.from(this._inputs).every((input) => {
			return input.validity.valid
		})

		if (isFormValid) {
			this._buttonSave.classList.remove(
				this._enableValidation.inactiveButtonClass
			)
			this._buttonSave.removeAttribute("disabled")
		} else {
			this._buttonSave.classList.add(this._enableValidation.inactiveButtonClass)
			this._buttonSave.setAttribute("disabled", true)
		}
	}
	_setEventListeners() {
		this._toggleButton()
		this._inputs.forEach((input) => {
			input.addEventListener("input", () => {
				this._inputValidity(input)
				this._toggleButton()
			})
		})
	}

	enableValidation() {
		this._setEventListeners()
	}

	resetFormErrors() {
		this._form.reset()
		this._inputs.forEach((input) => {
			this._hideInputError(input)
		})
		this._toggleButton()
	}
}
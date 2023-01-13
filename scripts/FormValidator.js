export default class FormValidator {

	constructor(enableValidation, form) {
		this._enableValidation = enableValidation;
		this._form = form;
		this._inputs = Array.from(this._form.querySelectorAll(this._enableValidation.inputSelector));
		this._buttonSave = this._form.querySelector(this._enableValidation.submitButtonSelector);
	}

	_checkInputValidity(input) {
		if (!input.validity.valid) {
			this._showInputError(input);
		} else {
			this._hideInputError(input);
		}
	}
	_showInputError(input) {
		const error = this._form.querySelector(`#${input.id}-error`);
		input.classList.add(this._enableValidation.inputErrorClass);
		error.classList.add(this._enableValidation.errorClass);
		error.textContent = input.validationMessage;
	}
	_hideInputError(input) {
		const error = this._form.querySelector(`#${input.id}-error`);
		input.classList.remove(this._enableValidation.inputErrorClass);
		error.classList.remove(this._enableValidation.errorClass);
		error.textContent = '';
	}
	_toggleButtonState() {
		const isFormValid = Array.from(this._inputs).every(input => {
			return input.validity.valid;
		});

		if (isFormValid) {
			this._buttonSave.classList.remove(this._enableValidation.inactiveButtonClass);
			this._buttonSave.removeAttribute('disabled');
		} else {
			this._buttonSave.classList.add(this._enableValidation.inactiveButtonClass);
			this._buttonSave.setAttribute('disabled', true);
		}
	}
	_setEventListeners() {
		this._toggleButtonState();


		this._inputs.forEach(input => {
			input.addEventListener('input', () => {
				this._checkInputValidity(input);
				this._toggleButtonState();
			});
		});
	}
	enableValidation() {
		this._setEventListeners();
	};
	resetFormErrors() {
		this._form.reset();
		this._inputs.forEach((input) => {
			this._hideInputError(input);
		})
		this._toggleButtonState();
	}
};


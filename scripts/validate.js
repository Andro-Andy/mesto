const enableValidation = {
	formSelector: '.popup__form',
	inputSelector: '.popup__form-input',
	submitButtonSelector: '.popup__form-submit',
	inactiveButtonClass: 'popup__form-submit_invalid',
	inputErrorClass: 'popup__form-input_error',
	errorClass: 'popup__error_visibility'
};

const checkInpValidity = (input, {
	errorClass, inputErrorClass
}) => {
	const error = document.querySelector(`#${input.id}-error`);
	let inps = (input.validity.valid) ? error.textContent = '' && input.classList.remove(inputErrorClass) && error.classList.remove(errorClass) : error.textContent = input.validationMessage && error.classList.add(errorClass) && input.classList.add(inputErrorClass);
}
const toggleSubmitButton = (inputs, button, {
	inactiveButtonClass
}) => {
	const isFormValid = inputs.every(input => input.validity.valid)

	if (isFormValid) {
		button.classList.remove(inactiveButtonClass);
		button.disabled = '';

	} else {
		button.classList.add(inactiveButtonClass);
		button.disabled = 'disabled';
	}
}
const disabledSubmitButton = (button, {
	inactiveButtonClass
}) => {
	button.classList.add(inactiveButtonClass);
	button.disabled = 'disabled';
}
const validation = ({
	formSelector, inputSelector, submitButtonSelector, ...vals
}) => {
	const forms = [...document.querySelectorAll(formSelector)]
	forms.forEach(form => {
		const inputs = [...form.querySelectorAll(inputSelector)]
		const button = form.querySelector(submitButtonSelector)
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			disabledSubmitButton(button, vals);
		})
		inputs.forEach(input => {
			input.addEventListener('input', () => {
				checkInpValidity(input, vals);
				toggleSubmitButton(inputs, button, vals);
			})
		})
	})
};
validation(enableValidation);
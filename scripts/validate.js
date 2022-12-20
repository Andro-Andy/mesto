const elementsValidators = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_invalid',
  inputErrorClass: 'popup__form-input_error',
  errorClass: 'popup__error_visibility'
};
const checkInputValidity = (input, {errorClass, inputErrorClass}) => {
  const error = document.querySelector(`#${input.id}-error`);
  if(input.validity.valid) {
      error.textContent = '';
      error.classList.remove(errorClass);
      input.classList.remove(inputErrorClass);
  } else {
      error.textContent = input.validationMessage;
      error.classList.add(errorClass);
      input.classList.add(inputErrorClass);
  }
}
const toggleSaveButton = (inputs, button, {inactiveButtonClass}) => {
  const isFormValid = inputs.every(input => input.validity.valid)

  if(isFormValid) {
      button.classList.remove(inactiveButtonClass);
      button.disabled = '';

  } else {
      button.classList.add(inactiveButtonClass);
      button.disabled = 'disabled';
  }
}
const disableButtonSave = (button, {inactiveButtonClass}) => {
  button.classList.add(inactiveButtonClass);
  button.disabled = 'disabled';
}
const enableValidation = ({formSelector, inputSelector, submitButtonSelector, ...restConfig} ) =>  {
const forms = [...document.querySelectorAll(formSelector)]  
forms.forEach(form => {
  const inputs = [...form.querySelectorAll(inputSelector)]
  const button = form.querySelector(submitButtonSelector)
  form.addEventListener('submit', (e) => {
      e.preventDefault();
     disableButtonSave(button, restConfig);
  })
  inputs.forEach(input => {
      input.addEventListener('input', () => {
          checkInputValidity(input, restConfig);
          toggleSaveButton(inputs, button, restConfig);
      })
  })
})
};
enableValidation(elementsValidators);
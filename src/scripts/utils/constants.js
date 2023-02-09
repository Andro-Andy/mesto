// Попапы
const popEdit = document.querySelector(".popup_edit")

// Кнопки
const popEditBtn = document.querySelector(".profile__edit-button")
const popAddBtn = document.querySelector(".profile__add-button")

// Поля ввода
const inpName = document.querySelector(".popup__form-input_name")
const inpBio = document.querySelector(".popup__form-input_bio")

// Форма
const popAddForm = document.forms["element-form"]

// Массив
const initialCards = [{
  name: "Архыз",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
}, {
  name: "Челябинская область",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
}, {
  name: "Иваново",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
}, {
  name: "Камчатка",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
}, {
  name: "Холмогорский район",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
}, {
  name: "Байкал",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
},]

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-submit",
  inactiveButtonClass: "popup__form-submit_invalid",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__error_visibility",
}
// экспорт 
export {
  validationSettings,
  popEdit,
  popEditBtn,
  popAddBtn,
  initialCards,
  inpName,
  inpBio,
  popAddForm
}
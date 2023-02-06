// Попапы
const popEdit = document.querySelector(".popup_edit")
const popAdd = document.querySelector(".popup_add")

// Кнопки
const popEditBtn = document.querySelector(".profile__edit-button")
const popAddBtn = document.querySelector(".profile__add-button")

// Формы
const inpName = document.querySelector(".popup__form-input_name")
const inpBio = document.querySelector(".popup__form-input_bio")
const popAddForm = document.forms["element-form"]

// Значения для карточки
const popAddTitle = popAdd.querySelector(".popup__form-input_title")
const popAddLink = popAdd.querySelector(".popup__form-input_link")

// Массив
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
]
// экспорт 
export { popEdit, popAdd, popEditBtn, popAddBtn, initialCards, inpName, inpBio, popAddForm, popAddTitle, popAddLink }
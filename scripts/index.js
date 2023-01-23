import { Card } from "./Card.js"
import { FormValidator } from "./FormValidator.js"

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

// Попапы
const popEdit = document.querySelector(".popup_edit")
const popAdd = document.querySelector(".popup_add")
const popPhoto = document.querySelector(".popup_photo")

// Кнопки
const popEditBtn = document.querySelector(".profile__edit-button")
const popAddBtn = document.querySelector(".profile__add-button")
const closeButtonsPopup = document.querySelectorAll(".popup__container-close")
const ESC = "Escape"

// Формы
const elems = document.querySelector(".elements")
const popEditForm = document.forms["profile-form"]
const popAddForm = document.forms["element-form"]
const formAdd = popAdd.querySelector(".popup__form")

// Изменение значений
const inpName = document.querySelector(".popup__form-input_name")
const inpBio = document.querySelector(".popup__form-input_bio")
const profileName = document.querySelector(".profile__name")
const profileJob = document.querySelector(".profile__bio")

// Значения для карточки
const popAddTitle = popAdd.querySelector(".popup__form-input_title")
const popAddLink = popAdd.querySelector(".popup__form-input_link")

// Данные карточки
const popImage = popPhoto.querySelector(".popup__image")
const popImageText = popPhoto.querySelector(".popup__photo-text")

const enableValidation = {
	formSelector: ".popup__form",
	inputSelector: ".popup__form-input",
	submitButtonSelector: ".popup__form-submit",
	inactiveButtonClass: "popup__form-submit_invalid",
	inputErrorClass: "popup__form-input_error",
	errorClass: "popup__error_visibility",
}

const validationPopPro = new FormValidator(enableValidation, popEdit)
validationPopPro.enableValidation()

const validationPopAdd = new FormValidator(enableValidation, formAdd)
validationPopAdd.enableValidation()

const closePopupEsc = (evt) => {
	if (evt.key === ESC) {
		closePopup(document.querySelector(`.popup_opened`))
	}
}
function handlePopupClose(e) {
	if (e.target.classList.contains("popup")) {
		closePopup(e.target)
	}
}
popAdd.addEventListener('click', handlePopupClose)
popEdit.addEventListener('click', handlePopupClose)
popPhoto.addEventListener('click', handlePopupClose)


function openPopup(popup) {
	document.addEventListener("keydown", closePopupEsc)
	popup.classList.add("popup_opened")
}
function closePopup(popup) {
	document.removeEventListener("keydown", closePopupEsc)
	popup.classList.remove("popup_opened")
}
closeButtonsPopup.forEach((closeButton) => {
	const popup = closeButton.closest(".popup")
	closeButton.addEventListener("click", () => closePopup(popup))
})

initialCards.forEach(renderCard)

popEditBtn.addEventListener("click", function () {
	openPopup(popEdit)
	inpName.value = profileName.textContent
	inpBio.value = profileJob.textContent
})

function imageClick(data) {
	popImageText.textContent = data.name
	popImage.src = data.link
	popImage.alt = data.name
	openPopup(popPhoto)
}

function renderCard(data) {
	const item = new Card(data, "#element", imageClick)
	const newItem = item.createElement()
	elems.prepend(newItem)
}

popAddBtn.addEventListener("click", () => {
	validationPopAdd.resetFormErrors()
	openPopup(popAdd)
})
popEditForm.addEventListener("submit", function submitformHandler(evt) {
	evt.preventDefault()
	profileName.textContent = inpName.value
	profileJob.textContent = inpBio.value
	closePopup(popEdit)
})

popAddForm.addEventListener("submit", function submitformHandler(evt) {
	evt.preventDefault()

	const newcard = {
		name: popAddTitle.value,
		link: popAddLink.value,
	}

	renderCard(newcard)
	closePopup(popAdd)
	popAddForm.reset()
})

import Card from "./Card.js";
import FormValidator from './FormValidator.js';
// Попапы
const popEdit = document.querySelector(".popup_edit")
const popAdd = document.querySelector(".popup_add")
const popPhoto = document.querySelector(".popup_photo")

// Кнопки
const popEditBtn = document.querySelector(".profile__edit-button")
const popAddBtn = document.querySelector(".profile__add-button")
const closePopButtons = document.querySelectorAll(".popup__container-close")
const KEYESC = 'Escape';

// Формы
const elems = document.querySelector(".elements")
const PopEditForm = document.forms["profile-form"]
const PopAddForm = document.forms["element-form"]
const formAdd = popAdd.querySelector('.popup__form')

// Изменение значений
const inpName = document.querySelector(".popup__form-input_name")
const inpBio = document.querySelector(".popup__form-input_bio")
const proName = document.querySelector(".profile__name")
const proBio = document.querySelector(".profile__bio")

// Значения для карточки
const popAddTitle = popAdd.querySelector(".popup__form-input_title")
const popAddLink = popAdd.querySelector(".popup__form-input_link")

// Данные карточки
const popImage = popPhoto.querySelector(".popup__image")
const popImageText = popPhoto.querySelector(".popup__photo-text")


const enableValidation = {
	formSelector: '.popup__form',
	inputSelector: '.popup__form-input',
	submitButtonSelector: '.popup__form-submit',
	inactiveButtonClass: 'popup__form-submit_invalid',
	inputErrorClass: 'popup__form-input_error',
	errorClass: 'popup__error_visibility'
};

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


const validationPopupProfile = new FormValidator(enableValidation, popEdit);
validationPopupProfile.enableValidation();

const validationPopupAdd = new FormValidator(enableValidation, formAdd);
validationPopupAdd.enableValidation();

const closePopupEsc = (evt) => {
	if (evt.key === KEYESC) {
		closePopup(document.querySelector(`.popup_opened`));
	}
};
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("popup")) {
		closePopup(e.target);
	}
});
function openPopup(popup) {
	document.addEventListener("keydown", closePopupEsc);
	popup.classList.add("popup_opened");
}
function closePopup(popup) {
	document.removeEventListener("keydown", closePopupEsc);
	popup.classList.remove("popup_opened");
}
closePopButtons.forEach((closeButton) => {
	const popup = closeButton.closest(".popup");
	closeButton.addEventListener("click", () => closePopup(popup));
});

initialCards.forEach(render);

popEditBtn.addEventListener("click", function () {
	openPopup(popEdit);
	inpName.value = proName.textContent;
	inpBio.value = proBio.textContent;
});

function handleImageClick(data) {
	popImageText.textContent = data.name;
	popImage.src = data.link;
	popImage.alt = data.name;
	openPopup(popPhoto);
}

function render(data) {
	const item = new Card(data, "#element", handleImageClick);
	const newItem = item.createElement();
	elems.prepend(newItem);
}

popAddBtn.addEventListener("click", () => {
	validationPopupAdd.resetFormErrors();
	openPopup(popAdd);
});
PopEditForm.addEventListener("submit", function submitformHandler(evt) {
	evt.preventDefault();
	proName.textContent = inpName.value;
	proBio.textContent = inpBio.value;
	closePopup(popEdit);
});

PopAddForm.addEventListener("submit", function submitformHandler(evt) {
	evt.preventDefault();

	const newcard = {
		name: popAddTitle.value,
		link: popAddLink.value,
	};

	render(newcard);
	closePopup(popAdd);
	PopAddForm.reset();
});
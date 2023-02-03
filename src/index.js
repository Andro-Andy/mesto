import './pages/index.css'
import { Card } from "./scripts/Card.js"
import { FormValidator } from "./scripts/FormValidator.js"
import { popEdit, popAdd, popEditBtn, popAddBtn, initialCards, inpName, inpBio, popAddForm, popAddTitle, popAddLink } from "./scripts/values/constants.js"

// Попапы

const popPhoto = document.querySelector(".popup_photo")

// Кнопки
const closeButtonsPopup = document.querySelectorAll(".popup__container-close")
const ESC = "Escape"

// Формы
const elems = document.querySelector(".elements")
const popEditForm = document.forms["profile-form"]
const formAdd = popAdd.querySelector(".popup__form")

// Изменение значений
const profileName = document.querySelector(".profile__name")
const profileJob = document.querySelector(".profile__bio")


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

// sss

import './pages/index.css';
import { Card } from "./scripts/components/card.js"
import { FormValidator } from "./scripts/components/FormValidator.js";
import { Section } from "./scripts/components/Section.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { UserInfo } from "./scripts/components/UserInfo.js";
import { popupProfile, popupOpenProfileButton, nameInput, jobInput, popupOpenAddButton, popupAdd, formAdd, popupAddTitle, popupAddLink, initialCards } from "./scripts/utils/constants.js"

function renderCard(data) {
	const cardElement = new Card(data, '#card-template', handleImageClick);
	const newElement = cardElement.createElement();
	return newElement;
};

const cardList = new Section({
	items: initialCards,
	renderer: (item) => {
		cardList.addItem(renderCard(item));
	}
}, '.cards');


cardList.renderItems();


const popupWithImage = new PopupWithImage({ selectorPopup: ('.popup-card') });
popupWithImage.setEventListeners();
function handleImageClick(data) {
	popupWithImage.open(data.name, data.link);
};
const newCardFormPopup = new PopupWithForm({
	selectorPopup: (".popup_card_add"), handleFormSubmit: (data) => {
		cardList.addItem(renderCard(data));
		newCardFormPopup.close();
	}
});



newCardFormPopup.setEventListeners();
popupOpenAddButton.addEventListener('click', () => {
	validationPopupAdd.resetValidation();
	newCardFormPopup.open();
})
const userInfo = new UserInfo({ selectorName: (".profile__title"), selectorProf: (".profile__subtitle") });


const userInfoFormPopup = new PopupWithForm({
	selectorPopup: (".popup_form_edit"),
	handleFormSubmit: (formData) => {
		userInfo.setUserInfo(formData.name, formData.prof);

		userInfoFormPopup.close();
	},
});

userInfoFormPopup.setEventListeners();

popupOpenProfileButton.addEventListener("click", () => {
	userInfoFormPopup.open();
	const { name, prof } = userInfo.getUserInfo();
	nameInput.value = name;
	jobInput.value = prof;
});

const validationPopupProfile = new FormValidator(popupProfile);
validationPopupProfile.enableValidation();

const validationPopupAdd = new FormValidator(formAdd);
validationPopupAdd.enableValidation();
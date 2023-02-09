import './index.css';
import { Card } from "../scripts/components/Сard.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import {
	validationSettings,
	popEdit,
	popEditBtn,
	popAddBtn,
	inpName,
	inpBio,
	popAddForm,
	initialCards
} from "../scripts/utils/constants.js"

function renderCard(data) {
	const cardElement = new Card(data, '#element', handleImageClick);
	const newElement = cardElement.createElement();
	return newElement;
};

const elemList = new Section({
	items: initialCards,
	renderer: (item) => {
		elemList.addItem(renderCard(item));
	}
}, '.elements');
elemList.renderItems();

const popupWithImage = new PopupWithImage({
	selectorPopup: ('.popup_photo')
});
popupWithImage.setEventListeners();

function handleImageClick(data) {
	popupWithImage.open(data.name, data.link);
};

const newElemFormPopup = new PopupWithForm({
	selectorPopup: (".popup_add"),
	handleFormSubmit: (data) => {
		elemList.addItem(renderCard(data));
		newElemFormPopup.close();
	}
});

newElemFormPopup.setEventListeners();
popAddBtn.addEventListener('click', () => {
	validationPopupAdd.resetValidation();
	newElemFormPopup.open();
})

const userInfo = new UserInfo({
	selectorName: (".profile__name"),
	selectorProf: (".profile__bio")
});

const userInfoFormPopup = new PopupWithForm({
	selectorPopup: (".popup_edit"),
	handleFormSubmit: (formData) => {
		userInfo.setUserInfo(formData.name, formData.bio);

		userInfoFormPopup.close();

	},

});

userInfoFormPopup.setEventListeners();

popEditBtn.addEventListener("click", () => {
	userInfoFormPopup.open();
	const {
		name,
		bio
	} = userInfo.getUserInfo();
	inpName.value = name;
	inpBio.value = bio;
});

const validationPopupProfile = new FormValidator(validationSettings, popEdit);
validationPopupProfile.enableValidation();

const validationPopupAdd = new FormValidator(validationSettings, popAddForm);
validationPopupAdd.enableValidation();

import './pages/index.css'
import { Card } from "./scripts/components/Сard.js"
import { FormValidator } from "./scripts/components/FormValidator.js"
import { Section } from "./scripts/components/Section.js";
import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import { PopupWithImage } from "./scripts/components/PopupWithImage.js";
import { UserInfo } from "./scripts/components/UserInfo.js";
import { popEdit, popEditBtn, popAddBtn, initialCards, inpName, inpBio, popAddForm } from "./scripts/utils/constants.js"


function renderCard(data) {
	const cardElement = new Card(data, '#element', handleImageClick);
	const newElement = cardElement.createElement();
	return newElement;
};

const cardList = new Section({
	items: initialCards,
	renderer: (item) => {
		cardList.addItem(renderCard(item));
	}
}, '.elements');


cardList.renderItems();


const popupWithImage = new PopupWithImage({ selectorPopup: ('.popup_photo') });
popupWithImage.setEventListeners();
function handleImageClick(data) {
	popupWithImage.open(data.name, data.link);
};

const newCardFormPopup = new PopupWithForm({
	selectorPopup: (".popup_add"), handleFormSubmit: (data) => {
		cardList.addItem(renderCard(data));
		newCardFormPopup.close();
	}
});

newCardFormPopup.setEventListeners();
popAddBtn.addEventListener('click', () => {
	validationPopAdd.resetValidation();
	newCardFormPopup.open();
})
const userInfo = new UserInfo({ selectorName: (".profile__name"), selectorProf: (".profile__bio") });


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
	const { name, bio } = userInfo.getUserInfo();
	inpName.value = name;
	inpBio.value = bio;
});

const validationPopupProfile = new FormValidator(popEdit);
validationPopupProfile.enableValidation();

const validationPopAdd = new FormValidator(popAddForm);
validationPopAdd.enableValidation();
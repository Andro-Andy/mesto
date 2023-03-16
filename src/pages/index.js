import './index.css';
import { Api } from "../scripts/components/Api"
import { Card } from "../scripts/components/Card";
import { FormValidator } from "../scripts/components/FormValidator";
import { Section } from "../scripts/components/Section";
import { PopupWithForm } from "../scripts/components/PopupWithForm";
import { PopupWithImage } from "../scripts/components/PopupWithImage";
import { PopupWithSubmit } from "../scripts/components/PopupWithSubmit";
import { UserInfo } from "../scripts/components/UserInfo";

import {
	popAvatarEdit,
	popEditForm,
	popAddForm,
	popAvatarForm,
	inpAvatarLink,
	profileEditBtn,
	profileAddBtn,
	profileAvatarBtn,
	popupImageSelector,
	elementContainer,
	elementTemplate,
	profileSelector,
	validationSettings,
} from '../scripts/utils/constants'


/// Получение данных
const api = new Api({
	baseUrl: "https://mesto.nomoreparties.co/v1/cohort-59",
	headers: {
		authorization: "517b3546-03eb-4040-a940-37b8e028d3a8",
		"Content-Type": "application/json",
	},
})
let userId = null
const section = new Section(
	{
		renderer: (item) => {
			const cardElement = createNewElement(item)
			section.addItem(cardElement)
		},
	},
	elementContainer
)

const renderInitialElement = (elements) => {
	section.renderItems(elements)
}

// Создание нового елемента
const createNewElement = (item) => {
	const newCard = new Card(item, userId, elementTemplate, {
		handleElementClick: (name, link) => {
			popupWithBigImage.open(name, link)
		},
		handleLikeClick: (id) => {
			newCard.checkAvailabilityLike()
				? api
					.deleteLike(id)
					.then((res) => {
						newCard.setLikes(res.likes)
					})
					.catch((err) => console.log(err))
				: api
					.addLike(id)
					.then((res) => {
						newCard.setLikes(res.likes)
					})
					.catch((err) => {
						console.log(err)
					})
		},
		handleDeleteBtnClick: (id, card) => {
			popupWithSubmit.open(id, card)
		},
	})

	return newCard.createElement()
}

Promise.all([api.getUserInfo(), api.getInitialElement()])
	.then(([user, elementList]) => {
		userInfo.setUserInfo(user.name, user.about)
		userInfo.setUserAvatar(user.avatar)
		userId = user._id

		renderInitialElement(elementList)
	})
	.catch((err) => {
		console.log(err)
	})

// Добавление новой карточки
const addNewElement = (card) => {
	popupAddCardForm.saveBtn("Сохранение...")
	api
		.addNewElement(card.name, card.link)
		.then((item) => {
			const cardElement = createNewElement(item)
			section.prependAddItem(cardElement)
			popupAddCardForm.close()
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(popupAddCardForm.saveBtn("Создать"))
}

// Удаление карточки
const handleDeleteElement = (id, card) => {
	api
		.deleteElement(id)
		.then((res) => {
			popupWithSubmit.deleteElement()
			popupWithSubmit.close()
		})
		.catch((error) => {
			console.log(error)
		})
}

// Попап подтверждения удаления карточки
const popupWithSubmit = new PopupWithSubmit(
	".popup_delete-confirm",
	(id, card) => handleDeleteElement(id, card)
)
popupWithSubmit.setEventListeners()

// Редактирование аватара
const handleEditAvatar = () => {
	editAvatarPopup.saveBtn("Сохранение...")
	api
		.editUserAvatar(inpAvatarLink.value)
		.then((res) => {
			userInfo.setUserAvatar(res.avatar)
			editAvatarPopup.close()
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(editAvatarPopup.saveBtn("Сохранить"))
}

// Редактирование данных
const handleEditProfileFormSubmit = (item) => {
	popupEditProfileForm.saveBtn("Сохранение...")
	api
		.editUserInfo(item.name, item.info)
		.then((res) => {
			userInfo.setUserInfo(res.name, res.about)
			popupEditProfileForm.close()
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(popupEditProfileForm.saveBtn("Сохранить"))
}

// Попапы
const userInfo = new UserInfo(profileSelector)

// Попап редактирования профиля
const popupEditProfileForm = new PopupWithForm('.popup_edit', handleEditProfileFormSubmit)
popupEditProfileForm.setEventListeners()

//Попап для добавления карточки
const popupAddCardForm = new PopupWithForm('.popup_add', addNewElement)
popupAddCardForm.setEventListeners()

// Попап редактирования аватара
const editAvatarPopup = new PopupWithForm(popAvatarEdit, handleEditAvatar)
editAvatarPopup.setEventListeners()

// Попап с картинкой
const popupWithBigImage = new PopupWithImage(popupImageSelector)
popupWithBigImage.setEventListeners()

// Валидация инпутов

// Валидация popupAdd
const formAddCardValidator = new FormValidator(validationSettings, popAddForm)
formAddCardValidator.enableValidation()

// Валидация popupEdit
const profileEditFormValidator = new FormValidator(validationSettings, popEditForm)
profileEditFormValidator.enableValidation()

// Валидация popupAvatar
const avatarEditFormValidator = new FormValidator(validationSettings, popAvatarForm)
avatarEditFormValidator.enableValidation()

// Кнопки

//редактирования профиля
profileEditBtn.addEventListener('click', () => {
	profileEditFormValidator.resetValidation()
	popupEditProfileForm.setInputValues(userInfo.getUserInfo())

	popupEditProfileForm.open()
})

//добавления карточки
profileAddBtn.addEventListener('click', function () {
	formAddCardValidator.resetValidation()
	popupAddCardForm.open()
})

//редактирования аватара
profileAvatarBtn.addEventListener('click', () => {
	avatarEditFormValidator.resetValidation()
	editAvatarPopup.open()
})

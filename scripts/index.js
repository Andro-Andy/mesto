// Попапы
const popEdit = document.querySelector(".popup_edit")
const popAdd = document.querySelector(".popup_add")
const popPhoto = document.querySelector(".popup_photo")

// Кнопки
const popEditBtn = document.querySelector(".profile__edit-button")
const popAddBtn = document.querySelector(".profile__add-button")
const closePopButtons = document.querySelectorAll(".popup__container-close")

// Формы
const elems = document.querySelector(".elements")
const PopEditForm = document.forms["profile-form"]
const PopAddForm = document.forms["element-form"]

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
}, ]
const ESC = 'Escape';
const closePopupEsc = (evt) => {
	if (evt.key === ESC) {
		closePopup(document.querySelector(`.popup_opened`));
	}
};
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("popup")) {
		closePopup(e.target);
	}
});

popAddBtn.addEventListener('click', function() {
	openPopup(popAdd);
});

function openPopup(popup) {
	document.addEventListener('keydown', closePopupEsc);
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	document.removeEventListener('keydown', closePopupEsc);
	popup.classList.remove('popup_opened');
}
const popClose = (evt) => {
	const screen = evt.target.classList.contains("popup");
	const close = evt.target.classList.contains("popup__container-close");
	if (screen || close) {
		closePopup();
	}
};

closePopButtons.forEach(closeButton => {
	const popup = closeButton.closest('.popup');
	closeButton.addEventListener('click', () => closePopup(popup));
});

function handleFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;
	closePopup(popEdit);
}
// Сохранение popup_edit
popEditBtn.addEventListener("click", function() {
	openPopup(popEdit)
	inpName.value = proName.textContent
	inpBio.value = proBio.textContent
})

function handleProfileFormSubmit(evt) {
	evt.preventDefault()
	proName.textContent = inpName.value
	proBio.textContent = inpBio.value
	closePopup(popEdit)
}
PopEditForm.addEventListener("submit", handleProfileFormSubmit)

// Генерация карточек
function createElement(src, alt) {
	const template = document.querySelector("#element").content
	const element = template.querySelector(".element").cloneNode(true)
	const elemImage = element.querySelector(".element__image")
	elemImage.setAttribute("src", src)
	elemImage.setAttribute("alt", alt)
	element.querySelector(".element__title").textContent = alt
		// element.querySelector(".element__like").addEventListener("click", function(like) {like.target.classList.toggle("element__like-active")})
	element.addEventListener('click', function(evt) {
		if (evt.target.classList.contains('element__like')) {
			evt.target.classList.toggle('element__like-active')
		}
	});

	// element.addEventListener('click', function (evt) { if (evt.target.classList.contains('element__delete')) {evt.target.closest('.element').remove}});  
	element.querySelector(".element__delete").addEventListener("click", function(del) {
		del.target.closest(".element").remove()
	})
	elemImage.addEventListener("click", function(event) {
		openImagePop(src, alt)
	})

	return element
}

function openImagePop(image, text) {
	openPopup(popPhoto)
	popImage.setAttribute("src", image)
	popImageText.textContent = text
	popImage.setAttribute("alt", text)
}

function addElem(src, alt) {
	const card = createElement(src, alt)
	elems.prepend(card)
}

initialCards.forEach(function(elemAdd) {
	addElem(elemAdd.link, elemAdd.name)
})

function saveElems(evt) {
	evt.preventDefault()
	const name = popAddTitle.value
	const linkImage = popAddLink.value
	addElem(linkImage, name)
	evt.target.reset()
	closePopup(popAdd)
}

PopAddForm.addEventListener("submit", saveElems)
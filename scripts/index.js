//  Открытие и закрытие блока popup add
const popEdt = document.querySelector('#popup-edit');
const popEmt = document.querySelector('#popup-add');
const card = document.querySelector('#popup_photo');
const btnEdit = document.querySelector('.profile__edit-button') ;
const poplockEdit = document.querySelector('.popup__container-close_edit');
btnEdit.addEventListener('click', function () { popEdt.classList.add('popup_opened')});
poplockEdit.addEventListener('click', function () { popEdt.classList.remove('popup_opened')});
window.addEventListener('click', e => {   
// закрыть popup при клике в любом месте вне popup
const target = e.target 
if (!target.closest('.popup__container') && !target.closest('.profile__edit-button') && !target.closest('.profile__add-button') && !target.closest('.element__image')) {
popEdt.classList.remove('popup_opened') || popEmt.classList.remove('popup_opened') || card.classList.remove('popup_opened');    
// данные profile при закрытии popup
let proName = document.querySelector('.profile__name').textContent;
nameInput.value = proName;
let proBio = document.querySelector('.profile__bio').textContent;
jobInput.value = proBio;
  }
}) 
// Редактирование профиля
let formElement = document.querySelector ('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector ('.popup__form-input_name');
let jobInput = document.querySelector ('.popup__form-input_bio');
// Обработчик «отправки» формы
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.               
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
 let name = document.querySelector('.profile__name').textContent = nameInput.value;
 let bio = document.querySelector('.profile__bio').textContent = jobInput.value ;
    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput;
    bio.textContent = jobInput;
    popup.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// Перенос данных в Input
let proName = document.querySelector('.profile__name').textContent;
document.querySelector('.popup__form-input_name').value = proName;
let proBio = document.querySelector('.profile__bio').textContent;
jobInput.value = proBio;
const initialCards = [{
	name: 'Архыз',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
	name: 'Челябинская область',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
	name: 'Иваново',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
	name: 'Камчатка',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
	name: 'Холмогорский район',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
	name: 'Байкал',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}]

const cards = document.querySelector('.elements');
const popupImage = card.querySelector('.popup__image');
const popuptext = card.querySelector('.popup__photo-text');
const popupAdd = document.querySelector('#popup-add');
const formAdd = popupAdd.querySelector('.popup__form');
const addTitle = popupAdd.querySelector('.popup__form-input_title');
const addlink = popupAdd.querySelector('.popup__form-input_link');
const popLockAdd = document.querySelectorAll('.popup__container-close');
const btnAdd = document.querySelector('.profile__add-button');
// Открытие и закрытие блока popup-add
btnAdd.addEventListener('click', function() {
	openPopup(popupAdd);
});
function openPopup(popup) {
	popup.classList.add('popup_opened');
}
function closePopup(popup) {
	popup.classList.remove('popup_opened');
}
popLockAdd.forEach(closeBtn => {
	const popup = closeBtn.closest('.popup');
	closeBtn.addEventListener('click', () => closePopup(popup));
});
function imgElems(image, text) {
	openPopup(card);
  popupImage.setAttribute('alt', text);
	popupImage.setAttribute('src', image);
	popuptext.textContent = text;
}
function addNewCard(src, alt) {
	const card = createCard(src, alt);
	cards.prepend(card);
}
initialCards.forEach(function(Add) {
	addNewCard(Add.link, Add.name);
});
function createCard(src, alt) {
	const Template = document.querySelector('#element').content;
	const Elem = Template.querySelector('.element').cloneNode(true);
	const elemImg = Elem.querySelector('.element__image');
  elemImg.setAttribute('alt', alt);
	elemImg.setAttribute('src', src);
	Elem.querySelector('.element__title').textContent = alt;
	Elem.querySelector('.element__like').addEventListener('click', function(like) {
		like.target.classList.toggle('element__like-active');
	});
	Elem.querySelector('.element__delete').addEventListener('click', function(del) {
		del.target.closest('.element').remove();
	});
	elemImg.addEventListener('click', function(event) {
		imgElems(src, alt);
	});
	return Elem;
}
function saveElems(evt) {
	evt.preventDefault();
  const linkImage = addlink.value;
	const name = addTitle.value;
	addNewCard(linkImage, name);
	evt.target.reset();
	closePopup(popupAdd);
}
formAdd.addEventListener('submit', saveElems);  

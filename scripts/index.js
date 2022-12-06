//  Открытие и закрытие блока popup add
const popEdt = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popImg = document.querySelector('.popup_photo');
const popupImage = popImg.querySelector('.popup__image');
const btnEdit = document.querySelector('.profile__edit-button') ;
const poplockEdit = document.querySelector('.popup__container-close_edit');
const closeImg = document.querySelector('.popup__container-close_photo');
const cards = document.querySelector('.elements');
const popuptext = popImg.querySelector('.popup__photo-text');
const formAdd = popupAdd.querySelector('.popup__form');
const addTitle = popupAdd.querySelector('.popup__form-input_title');
const addlink = popupAdd.querySelector('.popup__form-input_link');
const popLockAdd = document.querySelector('.popup__container-close_add');
const btnAdd = document.querySelector('.profile__add-button');

btnEdit.addEventListener('click', function () { popEdt.classList.add('popup_opened')});
poplockEdit.addEventListener('click', function () { popEdt.classList.remove('popup_opened')});
const popAdd = document.querySelector ('.form-edit');
window.addEventListener('click', e => {   
// закрыть popup при клике в любом месте вне popup
const target = e.target 
if (!target.closest('.popup__container') && !target.closest('.profile__edit-button') && !target.closest('.profile__add-button') && !target.closest('.popup__image')) {
popEdt.classList.remove('popup_opened') || popupAdd.classList.remove('popup_opened') || popupImage.classList.remove('popup_opened');    
// данные profile при закрытии popup
let proName = document.querySelector('.profile__name').textContent;
nameInput.value = proName;
let proBio = document.querySelector('.profile__bio').textContent;
jobInput.value = proBio;
  }
}) 

// Редактирование профиля
let nameInput = document.querySelector ('.popup__form-input_name');
let jobInput = document.querySelector ('.popup__form-input_bio');
function formSubmitHandler (evt) {
evt.preventDefault();
 let name = document.querySelector('.profile__name').textContent = nameInput.value;
 let bio = document.querySelector('.profile__bio').textContent = jobInput.value ;
name.textContent = nameInput;
bio.textContent = jobInput;
popEdt.classList.remove('popup_opened');
}
popAdd.addEventListener('submit', formSubmitHandler);
// Перенос данных в Input
let proName = document.querySelector('.profile__name').textContent;
nameInput.value = proName;
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

  btnAdd.addEventListener('click', function() {
  	openPopup(popupAdd);
  });
  function openPopup(popup) {
    popup.classList.add('popup_opened');
  }
	
	popLockAdd.addEventListener('click', function(){
		closePopup(popupAdd);	})
	function closePopup(closeAdd){
		closeAdd.classList.remove('popup_opened');
	}

  closeImg.addEventListener('click', function () { 
   closeImage(popImg)});
  function closeImage(close){
  close.classList.remove('popup_opened');
}
  // function closePopup(popup) {
	// popup.classList.remove('popup_opened');
  // }

function imgElems(image, text) {
	openPopup(popImg);
  popuptext.textContent = text;
	popupImage.setAttribute('src', image);
	popupImage.setAttribute('alt', text);
}
function addNewCard(src, alt) {
	const popImg = createCard(src, alt);
	cards.prepend(popImg);
}
initialCards.forEach(function(Add) {
	addNewCard(Add.link, Add.name);
});
function createCard(src, alt) {
	const Template = document.querySelector('#element').content;
	const Elem = Template.querySelector('.element').cloneNode(true);
	const elemImg = Elem.querySelector('.element__image');
	elemImg.setAttribute('src', src);
	elemImg.setAttribute('alt', alt);
	Elem.querySelector('.element__title').textContent = alt;
  Elem.querySelector('.element__like');
  Elem.addEventListener('click', function(like) {
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
function saveCard(evt) {
	evt.preventDefault();
	const name = addTitle.value;
	const linkImage = addlink.value;
	addNewCard(name, linkImage);
	evt.target.reset();
	closePopup(popupAdd);
}
formAdd.addEventListener('submit', saveCard);  
// Спасибо. Շնորհակալություն
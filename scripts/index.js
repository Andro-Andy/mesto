//  Открытие и закрытие блока popup add
const popEdt = document.querySelector('#popup-edit');
const btnEdit = document.querySelector('.profile__edit-button') ;
const poplockEdit = document.querySelector('.popup__container-close_edit');
btnEdit.addEventListener('click', function () { popEdt.classList.add('popup_opened')});
poplockEdit.addEventListener('click', function () { popEdt.classList.remove('popup_opened')});
// window.addEventListener('click', e => {   
// // закрыть popup при клике в любом месте вне popup
// const target = e.target 
// if (!target.closest('.popup__container') && !target.closest('.profile__edit-button') && !target.closest('.profile__add-button')) {
// popEdt.classList.remove('popup_opened') || popEmt.classList.remove('popup_opened');    
// // данные profile при закрытии popup
// let proName = document.querySelector('.profile__name').textContent;
// nameInput.value = proName;
// let proBio = document.querySelector('.profile__bio').textContent;
// jobInput.value = proBio;
//   }
// }) 
// Редактирование профиля
let formElement = document.querySelector ('#form-edit');
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
formElement.addEventListener('submit', formSubmitHandler);
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

const cards = document.querySelector('.elements');
const card = document.querySelector('#popup_photo');
const popupImage = card.querySelector('.popup__image');
const popuptext = card.querySelector('.popup__photo-text');
const popupAdd = document.querySelector('#popup-add');
const formAdd = popupAdd.querySelector('.popup__form');
const addTitle = popupAdd.querySelector('.popup__form-input_title');
const addlink = popupAdd.querySelector('.popup__form-input_link');
const popLockAdd = document.querySelectorAll('.popup__container-close');
const btnAdd = document.querySelector('.profile__add-button');
btnAdd.addEventListener('click', function() {
	openPopup(popupAdd);
});

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

function openPopup(popup) {
	popup.classList.add('popup_opened');
}

popLockAdd.forEach(closeBtn => {
	const popup = closeBtn.closest('.popup');
	closeBtn.addEventListener('click', () => closePopup(popup));
});

function imgElems(image, text) {
	openPopup(card);
	popupImage.setAttribute('src', image);
	popuptext.textContent = text;
	popupImage.setAttribute('alt', text);
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
	elemImg.setAttribute('src', src);
	elemImg.setAttribute('alt', alt);
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
function saveCard(evt) {
	evt.preventDefault();
	const name = addTitle.value;
	const linkImage = addlink.value;
	addNewCard(linkImage, name);
	evt.target.reset();
	closePopup(popupAdd);
}
formAdd.addEventListener('submit', saveCard);  



// Открытие и закрытие блока popup add
// const popEmt = document.querySelector('#popup-add');
// const btnAdd = document.querySelector('.profile__add-button');
// const popLockAdd = document.querySelector('.popup__container-close_add');
// btnAdd.addEventListener('click', function(){popEmt.classList.add('popup_opened')});
// popLockAdd.addEventListener('click', function () { popEmt.classList.remove('popup_opened')});
// Лайк карточек
// document.addEventListener('click', ({ target: a }) => {
//   if (a.classList.contains('element__like')) {
//     const index = [...document.querySelectorAll('.element__like')].indexOf(a);
//     const like = document.querySelectorAll('.element__like')[index];
//     like.classList.toggle('element__like-active');
//     [like.classList.contains('element__like-active')];
//   }
// }); 
// const container = document.querySelector('.page');
// const elems = container.querySelector(".elements");
// const Template = document.querySelector("#element").content;
// const cardElems = initialCards.map(function (item) {
//   return {
//     name: item.name,
//     link: item.link
//   };
// });
// function Cards() {
//   cardElems.forEach(renderCard);
// }

// function renderCard({ name, link }) {
//   const Element = Template.querySelector(".element").cloneNode(true);
//   Element.querySelector(".element__title").textContent = name;
//   Element.querySelector(".element__image").src = link;
//   elems.prepend(Element);
// }
// Cards();  
// const addButton = container.querySelector('.popup__form-submit_add');
// function addCard(titleValue, linkValue) {
//   if(titleValue && linkValue) {
//         const inpTemplate = document.querySelector("#element").content;
//         const inpElement = inpTemplate.querySelector(".element").cloneNode(true);
//         Container.prepend(inpElement);
//         inpElement.querySelector(".element__title").textContent = titleValue;
//         inpElement.querySelector(".element__image").src = linkValue;
//   }
// }

// addButton.addEventListener('click', function (evt)
//  {evt.preventDefault();
//   const title = document.querySelector('.popup__form-input_title');
//   const link = document.querySelector('.popup__form-input_link');
//   addCard(title.value, link.value);
// popEmt.classList.remove('popup_opened');
// title.value = '';
// link.value = '';
// });
// formElement.addEventListener('submit', addButton);


// // Удаление карточки 
// document.addEventListener('click', ({ target: g }) => {
//   if (g.classList.contains('element__delete')) {
//     const i = [...document.querySelectorAll('.element__delete')].indexOf(g);
//     const dell = document.querySelectorAll('.element')[i];
//     dell.remove()
//   }
// }); 

// document.addEventListener('click', ({ target: x }) => {
//   if (x.classList.contains('element__image')) {
//     const y = [...document.querySelectorAll('.element__image')].indexOf(x);
//     popImg.classList.add('popup_opened')
//     console.log(y)
//   }
// });

// closeImg.addEventListener('click',function(){
//   popImg.classList.remove('popup_opened');
// })
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
const popLockAdd = document.querySelectorAll('.popup__container-close');
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

  closeImg.addEventListener('click', function () { 
   closeImage(popImg)});
  function closeImage(close){
  close.classList.remove('popup_opened');
}
  function closePopup(popup) {
	popup.classList.remove('popup_opened');
  }




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


// popLockAdd.forEach(closeBtn => {
  //   const popup = closeBtn.closest('.popup');
  //   closeBtn.addEventListener('click', () => closePopup(popup));
  // });
// Открытие и закрытие блока popup add
// const popEmt = document.querySelector('#popup-add');
// const btnAdd = document.querySelector('.profile__add-button');
// const popLockAdd = document.querySelector('.popup__container-close_add');
// btnAdd.addEventListener('click', function(){popEmt.classList.add('popup_opened')});
// popLockAdd.addEventListener('click', function () { popEmt.classList.remove('popup_opened')});
// // Лайк карточек

// const container = document.querySelector('.page');
// const cardElems = initialCards.map(function (item) {
//   return {
//     name: item.name,
//     link: item.link,
//   };
// });
// function Cards() {
//   cardElems.forEach(renderCard);
// }
// const Img= document.querySelector('.popup__image'); 
// const Disc = document.querySelector('.popup__photo-text');
// const closeImg = document.querySelector('.popup__container-close_photo')
// const elems = document.querySelector(".elements");
// const Template = document.querySelector("#element").content;
// const popImg= document.querySelector('#popup_photo'); 
// const popupImage = popImg.querySelector('.popup__image');
// function renderCard({ name, link }) {
//   const Element = Template.querySelector(".element").cloneNode(true);
//   Element.querySelector(".element__title").alt = name;
//   Element.querySelector(".element__image").src = link;
//   Element.addEventListener("click", openPopupImage);
//   elems.prepend(Element);
// }
// initialCards.forEach((item) => renderCard(item));
// Cards();  
// const addButton = container.querySelector('.popup__form-submit_add');
// function addCard(titleValue, linkValue) {
//   if(titleValue && linkValue) {
//         const inpTemplate = document.querySelector("#element").content;
//         const inpElement = inpTemplate.querySelector(".element").cloneNode(true);
//         elems.prepend(inpElement);
//         inpElement.querySelector(".element__title").textContent = titleValue;
//         inpElement.querySelector(".element__image").src = linkValue;

//   }
// }
// кнопка лайк 
// document.addEventListener('click', ({ target: a }) => {
//   if (a.classList.contains('.element__like')) {
//     const index = [...document.querySelectorAll('.element__like')].indexOf(a);
//     const like = document.querySelectorAll('.element__like')[index];
//     like.classList.toggle('element__like-active');
//     [like.classList.contains('element__like-active')];
//   }
// }); 
// addButton.addEventListener('click', function (evt)
//  {evt.preventDefault();
//   const title = document.querySelector('.popup__form-input_title');
//   const link = document.querySelector('.popup__form-input_link');
//   addCard(title.value, link.value);
// popEmt.classList.remove('popup_opened');
// title.value = '';
// link.value = '';
// });
// popAdd.addEventListener('submit', addButton);


// // Удаление карточки 
// document.addEventListener('click', ({ target: g }) => {
//   if (g.classList.contains('element__delete')) {
//     const i = [...document.querySelectorAll('.element__delete')].indexOf(g);
//     const dell = document.querySelectorAll('.element')[i];
//     dell.remove()
//   }
// });
// function openPopupImage(e) {
//   openPopup(popImg);
//   Img.src = e.target.src;
//   Img.alt = e.target.alt;
//   Disc.textContent = e.target.name;
//   openPopup(popImg); 
// };

// function openPopup(popup) {	
//   console.log(popup);
//   popup.classList.add("popup_opened");
// }

// closeImg.addEventListener('click',function(){
//   popImg.classList.remove('popup_opened');
// })


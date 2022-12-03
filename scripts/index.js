//  Открытие и закрытие блока popup add
const popEdt = document.querySelector('#popup-edit');
const btnEdit = document.querySelector('.profile__edit-button') ;
const poplockEdit = document.querySelector('.popup__container-close_edit');
btnEdit.addEventListener('click', function () { popEdt.classList.add('popup_opened')});
poplockEdit.addEventListener('click', function () { popEdt.classList.remove('popup_opened')});
window.addEventListener('click', e => {   
// закрыть popup при клике в любом месте вне popup
const target = e.target 
if (!target.closest('.popup__container') && !target.closest('.profile__edit-button') && !target.closest('.profile__add-button')) {
popEdt.classList.remove('popup_opened') || popEmt.classList.remove('popup_opened');    
// данные profile при закрытии popup
let proName = document.querySelector('.profile__name').textContent;
nameInput.value = proName;
let proBio = document.querySelector('.profile__bio').textContent;
jobInput.value = proBio;
  }
}) 
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


//Открытие и закрытие блока popup New-card
const popEmt = document.querySelector('#popup-add');
const btnAdd = document.querySelector('.profile__add-button');
const popLockAdd = document.querySelector('.popup__container-close_add');
btnAdd.addEventListener('click', function(){popEmt.classList.add('popup_opened')});
popLockAdd.addEventListener('click', function () { popEmt.classList.remove('popup_opened')});

// Лайк карточек
document.addEventListener('click', ({ target: a }) => {
  if (a.classList.contains('element__like')) {
    const index = [...document.querySelectorAll('.element__like')].indexOf(a);
    const like = document.querySelectorAll('.element__like')[index];
    like.classList.toggle('element__like-active');
    [like.classList.contains('element__like-active')];
  }
}); 

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]  
const initialsContainer = document.querySelector(".elements");
const initialTemplate = document.querySelector("#element").content;
const initialInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});
function Cards() {
  initialInfo.forEach(renderCard);
}
function renderCard({ name, link }) {
  const initialElement = initialTemplate.querySelector(".element").cloneNode(true);
  initialElement.querySelector(".element__title").textContent = name;
  initialElement.querySelector(".element__image").src = link;
  initialsContainer.prepend(initialElement);
}
Cards();

const container = document.querySelector('.page');
const Container = container.querySelector('.elements');
const addButton = container.querySelector('.popup__form-submit_add');
function addCard(titleValue , linkValue){
  const inpTemplate = document.querySelector('#element').content;
  const inpElement = inpTemplate.querySelector('.element').cloneNode(true);
 Container.prepend(inpElement);
 inpElement.querySelector('.element__title').textContent = titleValue;
 inpElement.querySelector('.element__image').src = linkValue;
//  if(title || link  == " "){ 
  // c 50% увереностью думаю что не должны пустые карточки создаваться. Если надо  , можно подсказку как сделать?  
//   return addCard; Пожалуйста ❤
// };
}
addButton.addEventListener('click', function (evt)
 {evt.preventDefault();
  const title = document.querySelector('.popup__form-input_title');
  const link = document.querySelector('.popup__form-input_link');
  addCard(title.value, link.value);
popEmt.classList.remove('popup_opened');
title.value = '';
link.value = '';

});
formElement.addEventListener('submit', addButton);
// Удаление карточки 
document.addEventListener('click', ({ target: g }) => {
  if (g.classList.contains('element__delete')) {
    const i = [...document.querySelectorAll('.element__delete')].indexOf(g);
    const dell = document.querySelectorAll('.element')[i];
    dell.remove()
  }
}); 
const level = document.querySelector('#element__photo-popup');
const closeImg = document.querySelector('.popup__container-close_photo');
const pupImg = [...document.querySelectorAll('.element__image')];
const popImg = document.querySelector('#popup-photo');

container.onclick = function setLevelTimes(e) {
  if (e.target.classList.contains('container')) {
    pupImg.targetItem = pupImg[camelize(e.target.innerText)];
    console.log(pupImg.targetItem);
  }
}
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}
closeImg.addEventListener('click', function(){
popImg.classList.remove('popup_opened')
})
// document.addEventListener('click', ({ target: x }) => {
//   if (x.classList.contains('element__image')) {
//     const y = [...document.querySelectorAll('.element__image')].indexOf(x);
//     popImg.classList.add('popup_opened')
//     console.log(y)
//   }
// }); 
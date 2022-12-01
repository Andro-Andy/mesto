//  Открытие и закрытие блока popup add
const popEdt = document.querySelector('#popup-edit');
const btnEdit = document.querySelector('.profile__edit-button') ;
const poplockEdit = document.querySelector('.popup__container-close_edit');
btnEdit.addEventListener('click', function () { popEdt.classList.add('popup_opened')});
poplockEdit.addEventListener('click', function () { popEdt.classList.remove('popup_opened')});
window.addEventListener('click', e => {   
  // при клике в любом месте окна браузера
const target = e.target // находим элемент, на котором был клик
if (!target.closest('.popup__container') && !target.closest('.profile__edit-button') && !target.closest('.profile__add-button')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
popEdt.classList.remove('popup_opened') || popEmt.classList.remove('popup_opened')    // то закрываем окно навигации, удаляя активный класс , после будет добавлена фунуция сохранения при закрытии без кнопки 
 // данные profile при закрытии popup
let proName = document.querySelector('.profile__name').textContent;
document.querySelector('.popup__form-input_name').value = proName;
let proBio = document.querySelector('.profile__bio').textContent;
document.querySelector('.popup__form-input_bio').value = proBio;
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
document.querySelector('.popup__form-input_name').value = proName;
let proBio = document.querySelector('.profile__bio').textContent;
document.querySelector('.popup__form-input_bio').value = proBio;


//  Открытие и закрытие блока popup New-card
const popEmt = document.querySelector('#popup-add');
const btnAdd = document.querySelector('.profile__add-button');
const popLockAdd = document.querySelector('.popup__container-close_add');
btnAdd.addEventListener('click', function(){popEmt.classList.add('popup_opened')});
popLockAdd.addEventListener('click', function () { popEmt.classList.remove('popup_opened')});

//Кнопка лайка
document.addEventListener('click', ({ target: a }) => {
  if (a.classList.contains('element__like')) {
    const index = [...document.querySelectorAll('.element__like')].indexOf(a);
    const like = document.querySelectorAll('.element__like')[index];
    like.classList.toggle('element__like-active');
    [like.classList.contains('element__like-active')];
  }
});

//Карточки 
// const tempCard = document.querySelector('#element').content;
// const userElement = userTemplate.querySelector('.grid-element').cloneNode(true);

// наполняем содержимым
// userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
// userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

// отображаем на странице
// usersOnline.append(userElement); 
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
  }]

const container = document.querySelector('.page');
const Container = container.querySelector('.elements');
const addButton = container.querySelector('.popup__form-submit_add');
function addCard() {
  const inpTemplate = document.querySelector('#element').content;
  const inpElement = inpTemplate.querySelector('.element').cloneNode(true);
  const submitAdd = document.querySelector('#form-add');
 Container.append(inpElement);
 inpElement.querySelector('.popup-form__input_text');
 inpElement.querySelector('.popup-form__input_link');
 submitAdd.addEventListener('submit', addCard);
}
addButton.addEventListener('click', function () {
  const title = document.querySelector('.popup__form-input_name');
  const link = document.querySelector('.popup__form-input_bio');
  addCard(title.value, link.value);
  const fons = document.querySelector('.element__image');
  fons.style.backgroundImage = 'url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg)';
  return false;
});
// const element = querySelector('#element');
// const createCard = (element) => {
//   const cardItem = cardTemplate.querySelector(".element__card").cloneNode(true);
//   cardItem.querySelector(".element__text").classList = element.name;
//   cardItem.querySelector(".element__image").src = element.link;
//   cardItem.querySelector(".element__image").alt = element.name;
//   cardItem.querySelector(".element__button").addEventListener("click", function(evt) {
//       evt.target.classList.toggle("element__button_active");
//   });
//   cardItem.querySelector(".element__delete").addEventListener("click", function(evt) {
//       evt.target.closest(".element__card").remove();
//   });

//   return cardItem;
// };
// function addSong(artistValue, titleValue) { 
//   const trackContainer = document.createElement('div');
//   trackContainer.classList.add('song');

//   const artistElement = document.createElement('h4');
//   artistElement.classList.add('song__artist');
//   artistElement.textContent = artistValue;

//   const titleElement = document.createElement('h4');
//   titleElement.classList.add('song__title');
//   titleElement.textContent = titleValue;

//   const likButtonElement = document.createElement('button');
//   likButtonElement.classList.add('song__like');

//   trackContainer.append(artistElement, titleElement, likButtonElement);
//   songsContainer.append(trackContainer);
// }
// resetButton.addEventListener('click', function () {
//   const songs = document.querySelectorAll('.song');
  
//   for (let i = 0; i < songs.length; i++){
//     songs[i].remove()
//   }
// });
// function addSong(artistValue, titleValue) {
//   const songTemplate = document.querySelector('#song-template').content;
//   const songElement = songTemplate.querySelector('.song').cloneNode(true);
//   songElement.querySelector('.song__like').addEventListener('click', function (evt) {
//   evt.target.classList.toggle('song__like_active');
// });
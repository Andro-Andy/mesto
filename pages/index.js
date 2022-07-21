// Открытие редактирование профиля
// let popupBtn = document.querySelector('.profile__edtn-button');
// let popupCloseBtn = document.querySelector('.popup__close-btn');
// let popupEle = document.querySelector('.popup');

// function openPopup(){
//     popupEle.classList.add('popup_opened');
// }
// function closePopup(){
//     popupEle.classList.remove('popup_opened');
// }
// popupBtn.addEventListener('click', openPopup);
// popupCloseBtn.addEventListener('click', closePopup);
// popupEle.addEventListener('click', function(event){
//     if (event.target === event.currentTarget){
//         closePopup();
//     }
// })

let ButtonEdit = document.querySelector('.profile__edtn-button');
let editlock = document.querySelector('.popup');
let editslock = document.querySelector('.popup__close-btn');

ButtonEdit.onclick = function() {
editlock.classList.add('popup_opened'); 
}
editslock.onclick = function() {
editlock.classList.remove('popup_opened');
}



// Редактирование профиля

// Находим форму в DOM
let formElement = document.querySelector ('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector ('.popup__form-input_field_name');
let jobInput = document.querySelector ('.popup__form-input_field_bio');
// Обработчик «отправки» формы, хотя пока
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
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
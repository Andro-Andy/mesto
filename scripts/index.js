//  Открытие и закрытие блока popup
let ButtonEdit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let editlock = document.querySelector('.popup__container-close');
ButtonEdit.addEventListener('click', function () {
  popup.classList.toggle('popup_opened')
})
editlock.addEventListener('click', function () {
  popup.classList.toggle('popup_opened'  )
})
// ButtonEdit.onclick = function() {popup.classList.add('popup_opened')}; Этот спопсоб короче , но в брифе по другому 
// editlock.onclick = function() {popup.classList.remove('popup_opened');}
window.addEventListener('click', e => {   
// при клике в любом месте окна браузера
   const target = e.target // находим элемент, на котором был клик
   if (!target.closest('.popup__container') && !target.closest('.profile__edit-button')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
     popup.classList.remove('popup_opened')  // то закрываем окно навигации, удаляя активный класс , после будет добавлена фунуция сохранения при закрытии без кнопки 
    
     // данные profile при закрытии popup
    let proName = document.querySelector('.profile__name').textContent;
    document.querySelector('.popup__form-input_name').value = proName;
    let proBio = document.querySelector('.profile__bio').textContent;
    document.querySelector('.popup__form-input_bio').value = proBio;
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
document.querySelector('.popup__form-input_bio').value = proBio;
// Cо слезами на глазах доделал к 00:00 сидел с 15:00, пишу не чтобы поплакать , а чтобы возгордится  :) x2

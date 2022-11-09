
let buttonClosed = document.querySelector('.popup__closed-button');
let buttonEdit = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup');
let formElement = document.querySelector('#form');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');
let popUpName = document.querySelector('.profile__info-title');
let popUpAbout = document.querySelector('.profile__info-subtitle');
let buttonSubmit = document.querySelector('.popup__submit-button');
let buttonLike = document.querySelectorAll('.element__button-like');

function openedPopup() {
    popUp.classList.add("popup__opened-button");
    jobInput.value = popUpAbout.textContent;
    nameInput.value = popUpName.textContent;
}

function closedPopup() {
    popUp.classList.remove("popup__opened-button");
}

buttonEdit.addEventListener('click', openedPopup);
buttonClosed.addEventListener('click', closedPopup);



function formSubmitHandler(form) {
    form.preventDefault();
    popUpName.textContent = nameInput.value;
    popUpAbout.textContent = jobInput.value;
    closedPopup();
}

formElement.addEventListener('submit', formSubmitHandler);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', formSubmitHandler);
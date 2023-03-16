import { Popup } from './Popup.js'

export class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleDeleteElement) {
        super(popupSelector)
        this._handleDeleteElement = handleDeleteElement
        this._formElement = this._popupElement.querySelector('.popup__form')
        this._saveButton = this._formElement.querySelector('.popup__form-submit')
    }

    open(id, elementItem) {
        super.open()
        this._id = id
        this._card = elementItem
    }

    setEventListeners() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleDeleteElement(this._id, this._card)
        })
        super.setEventListeners()
    }

    //удалить карточку со страницы
    deleteElement() {
        this._card.remove();
    }
}


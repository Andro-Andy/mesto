export class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl
    this._headers = headers
  }

  _addResult(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  // Получение карточек
  getInitialElement() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._addResult(res))
  }

  // Добавить новый елемент
  addNewElement(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',

      headers: this._headers,

      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._addResult(res))
  }

  // Удалить елемент
  deleteElement(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._addResult(res))
  }

  // Лайк
  addLike(id) {
    return fetch(`${this._url}/cards/${id}/likes/`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._addResult(res))
  }

  // Удалить лайк
  deleteLike(id) {
    return fetch(`${this._url}/cards/${id}/likes/`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._addResult(res))
  }

  // Получeние данных 
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._addResult(res))
  }

  // Редактирование информации 
  editUserInfo(name, info) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: info,
      }),
    }).then((res) => this._addResult(res))
  }

  // Редакт аватара
  editUserAvatar(url) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => this._addResult(res))
  }
}

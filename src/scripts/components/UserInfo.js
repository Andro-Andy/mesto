export class UserInfo {
  constructor({ selectorName, selectorProf, selectorAvatar }) {
    this._userName = document.querySelector(selectorName)
    this._userInfo = document.querySelector(selectorProf)
    this._avatarInfo = document.querySelector(selectorAvatar)
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    }
  }

  setUserInfo(name, info) {
    this._userName.textContent = name
    this._userInfo.textContent = info
  }

  setUserAvatar(link) {
    this._avatarInfo.src = link
  }
}
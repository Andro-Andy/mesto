export class UserInfo {
  constructor({
    selectorName,
    selectorProf
  }) {
    this._userName = document.querySelector(selectorName);
    this._userProf = document.querySelector(selectorProf);
  }
  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      bio: this._userProf.textContent,
    }

    return userInfo;
  }

  setUserInfo(name, bio) {
    this._userName.textContent = name,
      this._userProf.textContent = bio
  }
}
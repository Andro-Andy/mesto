import { PopupWithForm } from "./scripts/components/PopupWithForm.js";
import { UserInfo } from "./scripts/components/UserInfo.js";
import { popEditBtn, inpName, inpBio } from "./scripts/utils/constants.js";

const userInfo = new UserInfo({ selectorName: (".profile__name"), selectorProf: (".profile__bio") });
const userInfoFormPopup = new PopupWithForm({
  selectorPopup: (".popup_edit"),
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.prof);
    userInfoFormPopup.close();
  },
});
userInfoFormPopup.setEventListeners();
popEditBtn.addEventListener("click", () => {
  userInfoFormPopup.open();
  const { name, prof } = userInfo.getUserInfo();
  inpName.value = name;
  inpBio.value = prof;
});

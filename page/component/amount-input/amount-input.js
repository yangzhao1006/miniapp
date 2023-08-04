import i18next from "i18next";Page({
  data: {
    value: 200, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onInputClear() {
    this.setData({
      value: '' });

  },
  onInputConfirm(e) {
    console.log(e);
    my.alert({
      content: 'confirmed' });

  },
  onInput(e) {
    console.log(e);
    const { value } = e.detail;
    this.setData({
      value });

  },
  onButtonClick() {
    my.alert({
      content: 'button clicked' });

  },
  onInputFocus(e) {
    console.log(e);
  },
  onInputBlur(e) {
    console.log(e);
  } });
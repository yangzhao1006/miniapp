import i18next from "i18next";Page({
  data: {
    height: 20,
    focus: false, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  bindButtonTap() {
    this.onFocus();
  },
  onFocus() {
    this.setData({
      focus: true });

  },
  onBlur() {
    this.setData({
      focus: false });

  },

  bindTextAreaBlur(e) {
    console.log(e.detail.value);
  },
  bindFormSubmit(e) {
    my.alert({
      content: e.detail.value.textarea });

  } });
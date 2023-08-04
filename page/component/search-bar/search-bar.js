import i18next from "i18next";Page({
  data: {
    value: '',
    showVoice: false, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  handleInput(value) {
    this.setData({
      value });

  },
  handleClear() {
    this.setData({
      value: '' });

  },
  handleFocus() {},
  handleBlur() {},
  handleCancel() {
    this.setData({
      value: '' });

  },
  handleSubmit(value) {
    my.alert({
      content: value });

  },
  onChange(e) {
    this.setData({
      showVoice: e.detail.value });

  } });
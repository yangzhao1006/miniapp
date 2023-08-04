import i18next from "i18next";Page({
  data: {
    longPassword: '', I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onInput(e) {
    this.setData({
      longPassword: e.detail.value });

  },
  onClear() {
    this.setData({
      longPassword: '' });

  } });
import i18next from "i18next";Page({
  data: {
    randomLine: 0, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onShow() {
    this.setData({
      randomLine: parseInt(Math.random() * 20 + 1, 0) });

  },
  onChange(e) {
    console.log('collapse change', e);
  } });
import i18next from "i18next";Page({
  data: {
    value: 8, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  callBackFn(value) {
    console.log(value);
  },
  modifyValue() {
    this.setData({
      value: 9 });

  } });
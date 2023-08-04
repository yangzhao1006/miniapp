import i18next from "i18next";Page({
  data: {
    verifyCode: '', I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onSend() {
    my.alert({
      title: 'verify code sent' });

  },
  onInput(e) {
    this.setData({
      verifyCode: e.detail.value });

  },
  onClear() {} });
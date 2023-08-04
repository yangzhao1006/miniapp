import i18next from "i18next";Page({
  data: {
    text: '3.1415926',
    copy: '', I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },


  handleInput(e) {
    this.setData({
      text: e.detail.value });

  },

  handleCopy() {
    my.setClipboard({
      text: this.data.text });

  },

  handlePaste() {
    my.getClipboard({
      success: ({ text }) => {
        this.setData({ copy: text });
      } });

  } });
import i18next from "i18next";Page({
  data: {
    x: 0,
    y: 0, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onButtonTap() {
    const { x, y } = this.data;
    if (x === 30) {
      this.setData({
        x: x + 1,
        y: y + 1 });

    } else {
      this.setData({
        x: 30,
        y: 30 });

    }
  } });
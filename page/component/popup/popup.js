import i18next from "i18next";Page({
  data: {
    showLeft: false,
    showRight: false,
    showTop: false,
    showBottom: false, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onTopBtnTap() {
    this.setData({
      showTop: true });

  },
  onRightBtnTap() {
    this.setData({
      showRight: true });

  },
  onLeftBtnTap() {
    this.setData({
      showLeft: true });

  },
  onButtomBtnTap() {
    this.setData({
      showBottom: true });

  },
  onPopupClose() {
    this.setData({
      showLeft: false,
      showRight: false,
      showTop: false,
      showBottom: false });

  } });
import i18next from "i18next";Page({
  data: {
    scrollTop: 0, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  scrollTopChange(e) {
    this.setData({
      scrollTop: e.detail.value });

  },
  onPageScroll({ scrollTop }) {
    console.log('onPageScroll', scrollTop);
  },
  scrollTo() {
    my.pageScrollTo({
      scrollTop: parseInt(this.data.scrollTop) });

  } });
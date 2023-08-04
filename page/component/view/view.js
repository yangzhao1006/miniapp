import i18next from "i18next";Page({
  data: {
    pageName: 'component/view', I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onLoad() {
    this.setData({
      returnIndex: getCurrentPages().length === 1 });

  },
  returnIndex() {
    my.switchTab({ url: '/page/tabBar/component/index' });
  } });
import i18next from "i18next";Page({
  data: {
    titleColor: {}, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  getTitleColor() {
    my.getTitleColor({
      success: (res) => {
        this.setData({
          titleColor: res });

      } });

  } });
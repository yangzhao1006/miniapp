import i18next from "i18next";Page({
  data: {
    src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg', I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  getImageInfo() {
    my.getImageInfo({
      src: this.data.src,
      success: (res) => {
        my.alert({
          content: JSON.stringify(res) });

      } });

  } });
import i18next from "i18next";Page({
  data: {
    compressedSrc: '',
    mode: 'aspectFit', I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  selectImage() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        my.compressImage({
          apFilePaths: res.apFilePaths,
          level: 1,
          success: (data) => {
            console.log(data);
            this.setData({
              compressedSrc: data.apFilePaths[0] });

          } });

      } });

  } });
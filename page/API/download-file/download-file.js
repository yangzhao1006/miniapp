import i18next from "i18next";Page({ data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  download() {
    my.downloadFile({
      url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
      success({ apFilePath }) {
        my.previewImage({
          urls: [apFilePath] });

      },
      fail(res) {
        my.alert({
          content: res.errorMessage || res.error });

      } });

  } });
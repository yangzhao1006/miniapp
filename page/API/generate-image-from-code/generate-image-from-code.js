import i18next from "i18next";Page({
  data: {
    imageStr: '',
    mode: 'aspectFit', I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  buttonClick() {
    my.generateImageFromCode({
      code: 'https://www.alipay.com',
      format: 'QRCODE',
      width: 200,
      correctLevel: 'H',
      success: (data) => {
        console.log(data);
        this.setData({
          imageStr: data.image });


      } });

  } });
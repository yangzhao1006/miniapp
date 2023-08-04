import i18next from "i18next";Page({ data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date());
  },
  stopPullDownRefresh() {
    my.stopPullDownRefresh({
      complete(res) {
        console.log(res, new Date());
      } });

  } });
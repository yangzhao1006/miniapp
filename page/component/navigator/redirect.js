import i18next from "i18next";Page({ data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title });

  } });
import i18next from "i18next";Page({ data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  index() {
    my.reLaunch({
      url: '/page/tabBar/component/index' });

  } });
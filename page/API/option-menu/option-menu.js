import i18next from "i18next";Page({ data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  onOptionMenuClick(e) {
    my.alert({
      content: `click option menu with index: ${JSON.stringify(e.data.index)}` });

  } });
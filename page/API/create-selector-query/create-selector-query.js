import i18next from "i18next";Page({ data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  createSelectorQuery() {
    my.createSelectorQuery().
    select('#non-exists').boundingClientRect().
    select('#one').boundingClientRect().
    selectAll('.all').boundingClientRect().
    select('#scroll').scrollOffset().
    selectViewport().boundingClientRect().
    selectViewport().scrollOffset().exec((ret) => {
      console.log(ret);
      my.alert({
        content: JSON.stringify(ret, null, 2) });

    });
  } });
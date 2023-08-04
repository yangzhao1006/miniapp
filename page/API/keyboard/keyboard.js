import i18next from "i18next";Page({ data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  bindHideKeyboard(e) {
    if (e.detail.value === "123") {
      // 收起键盘
      my.hideKeyboard();
    }
  } });
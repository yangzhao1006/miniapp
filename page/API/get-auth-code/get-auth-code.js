import i18next from "i18next";Page({
  onLoad() {},
  data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  getAuthCode: () => {
    my.getAuthCode({
      scopes: 'auth_user',
      success: ({ authCode }) => {
        my.alert({
          content: authCode });

      } });

  } });
import i18next from "i18next";
Page({
  data: {
    footer: [
      {
        text: i18next.t(
          "ant-mini-program-demo.page-result.error.Refresh",
          "刷新"
        ),
      },
    ],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
});

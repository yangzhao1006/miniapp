import i18next from "i18next";
Page({
  data: {
    footer: [
      {
        text: i18next.t(
          "ant-mini-program-demo.page-result.payment.Response",
          "返回"
        ),
      },
    ],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onTapLeft() {
    my.reLaunch({
      url: "/pages/page-result/index",
    });
  },
});

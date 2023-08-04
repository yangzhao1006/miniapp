import i18next from "i18next";
Page({
  data: {
    footer: [
      {
        text: i18next.t(
          "ant-mini-program-demo.page-result.redpacket.Operation",
          "操作1"
        ),
      },
      {
        text: i18next.t(
          "ant-mini-program-demo.page-result.redpacket.Operation.1",
          "操作2"
        ),
      },
    ],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
});

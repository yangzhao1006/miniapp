import i18next from "i18next";
Page({
  data: {
    footer: [
      {
        text: i18next.t(
          "ant-mini-program-demo.page-result.network.Fix",
          "修复"
        ),
      },
      {
        text: i18next.t(
          "ant-mini-program-demo.page-result.network.Refresh",
          "刷新"
        ),
      },
    ],
  },

  onTapLeft(e) {
    console.log(e, "onTapLeft");
  },
  onTapRight(e) {
    console.log(e, "onTapRight");
  },
});

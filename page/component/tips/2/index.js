import i18next from "i18next";
Page({
  data: {
    content: i18next.t(
      "ant-mini-program-demo.tips.2.ISeeDisappearInSeconds",
      "我知道了(2秒后消失)"
    ),
    time: 2000,
  },

  onClose() {
    my.alert({
      title: "12321",
    });
  },
});

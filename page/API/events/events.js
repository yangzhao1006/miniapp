import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  onLoad() {
    this.titleClick = my.on("titleClick", () => {
      console.log("title clicked");
      my.alert({
        title: i18next.t("ant-mini-program-demo.API.events.events.Dear", "亲"),
        content: i18next.t(
          "ant-mini-program-demo.API.events.events.YouJustClickedTheTitle",
          "您刚刚点击了标题"
        ),
        buttonText: i18next.t(
          "ant-mini-program-demo.API.events.events.ISee",
          "我知道了"
        ),
      });
    });
  },
  onUnload() {
    this.titleClick.remove();
  },
});

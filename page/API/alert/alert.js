import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  alert() {
    my.alert({
      title: i18next.t("ant-mini-program-demo.API.alert.alert.Dear", "亲"),
      content: i18next.t(
        "ant-mini-program-demo.API.alert.alert.YourBillForThisMonth",
        "您本月的账单已出"
      ),
      buttonText: i18next.t(
        "ant-mini-program-demo.API.alert.alert.ISee",
        "我知道了"
      ),
      success: () => {
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.alert.alert.TheUserClickedIKnow",
            "用户点击了「我知道了」"
          ),
        });
      },
    });
  },
});

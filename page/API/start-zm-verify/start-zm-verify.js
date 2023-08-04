import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  startZMVerify() {
    if (!my.canIUse("startZMVerify")) {
      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.start-zm-verify.start-zm-verify.TheClientVersionIsToo",
          "客户端版本过低"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.start-zm-verify.start-zm-verify.UpgradeAlipay",
          "请升级支付宝版本"
        ),
      });

      return;
    }

    my.startZMVerify({
      bizNo: "demo",
      success: (res) => {
        my.alert({ title: "success:" + JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ title: "fail: " + JSON.stringify(res) });
      },
    });
  },
});

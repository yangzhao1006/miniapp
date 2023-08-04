import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  vibrate() {
    my.vibrate({
      success: () => {
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.vibrate.vibrate.Vibrate",
            "振动起来了"
          ),
        });
      },
    });
  },
  vibrateLong() {
    if (my.canIUse("vibrateLong")) {
      my.vibrateLong((res) => {});
    } else {
      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.vibrate.vibrate.TheClientVersionIsToo",
          "客户端版本过低"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.vibrate.vibrate.MyVibratelongMustBeOr",
          "my.vibrateLong() 需要 10.1.35 及以上版本"
        ),
      });
    }
  },
  vibrateShort() {
    if (my.canIUse("vibrateShort")) {
      my.vibrateShort((res) => {});
    } else {
      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.vibrate.vibrate.TheClientVersionIsToo",
          "客户端版本过低"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.vibrate.vibrate.MyVibrateshortMustBeOr",
          "my.vibrateShort() 需要 10.1.35 及以上版本"
        ),
      });
    }
  },
});

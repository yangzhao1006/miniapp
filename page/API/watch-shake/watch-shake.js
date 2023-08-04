import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  watchShake() {
    my.watchShake({
      success: function () {
        console.log(
          i18next.t(
            "ant-mini-program-demo.API.watch-shake.watch-shake.ItSMoving",
            "动起来了"
          )
        );
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.watch-shake.watch-shake.ItSMovingOO",
            "动起来了 o.o"
          ),
        });
      },
    });
  },
});

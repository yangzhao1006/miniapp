import i18next from "i18next";
Page({
  data: {
    condition: false,
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onReady() {
    my.onUserCaptureScreen(() => {
      my.alert({
        content: i18next.t(
          "ant-mini-program-demo.API.user-capture-screen.user-capture-screen.UserScreenshotReceived",
          "收到用户截图"
        ),
      });
    });
  },
  offUserCaptureScreen() {
    my.offUserCaptureScreen();
    this.setData({
      condition: false,
    });
  },
  onUserCaptureScreen() {
    my.onUserCaptureScreen(() => {
      my.alert({
        content: i18next.t(
          "ant-mini-program-demo.API.user-capture-screen.user-capture-screen.UserScreenshotReceived",
          "收到用户截图"
        ),
      });
    });
    this.setData({
      condition: true,
    });
  },
});

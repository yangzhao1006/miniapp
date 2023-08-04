import i18next from "i18next";
Page({
  data: {
    status: false,
    brightness: 1,
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onLoad() {
    my.getScreenBrightness({
      success: (res) => {
        this.setData({
          brightness: res.brightness,
        });
      },
    });
  },
  sliderChange(e) {
    my.setScreenBrightness({
      brightness: e.detail.value,
      success: (res) => {
        this.setData({
          brightness: e.detail.value,
        });
      },
    });
  },
  switchKeepScreenOn(e) {
    my.setKeepScreenOn({
      keepScreenOn: e.detail.value,
      success: (res) => {
        this.setData({
          status: e.detail.value,
        });
      },
    });
  },
  getBrightness() {
    my.getScreenBrightness({
      success: (res) => {
        my.alert({
          content: i18next.t(
            "ant-mini-program-demo.API.screen.screen.CurrentScreenBrightnessResbrightness",
            "当前屏幕亮度：{{resBrightness}}",
            { resBrightness: res.brightness }
          ),
        });
      },
    });
  },
});

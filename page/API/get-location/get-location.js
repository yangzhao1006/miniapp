import i18next from "i18next";
import formatLocation from "./format-location.js";

Page({
  data: {
    hasLocation: false,
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  getLocation() {
    var that = this;
    my.showLoading();
    my.getLocation({
      success(res) {
        my.hideLoading();
        console.log(res);
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
        });
      },
      fail() {
        my.hideLoading();
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.get-location.get-location.FailedToLocate",
            "定位失败"
          ),
        });
      },
    });
  },
  clear() {
    this.setData({
      hasLocation: false,
    });
  },
});

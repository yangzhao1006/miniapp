import i18next from "i18next";
Page({
  data: {
    longitude: "120.126293",
    latitude: "30.274653",
    name: i18next.t(
      "ant-mini-program-demo.API.choose-location.choose-location.HuanglongVankeCenter",
      "黄龙万科中心"
    ),
    address: i18next.t(
      "ant-mini-program-demo.API.choose-location.choose-location.NoXueyuanRoad",
      "学院路77号"
    ),
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  chooseLocation() {
    var that = this;
    my.chooseLocation({
      success: (res) => {
        console.log(JSON.stringify(res));
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          name: res.name,
          address: res.address,
        });
      },
      fail: (error) => {
        my.alert({
          content:
            i18next.t(
              "ant-mini-program-demo.API.choose-location.choose-location.FailedToCall",
              "调用失败："
            ) + JSON.stringify(error),
        });
      },
    });
  },
});

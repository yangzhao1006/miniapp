import i18next from "i18next";
Page({
  data: {
    longitude: "120.126293",
    latitude: "30.274653",
    name: i18next.t(
      "ant-mini-program-demo.API.open-location.open-location.HuanglongVankeCenter",
      "黄龙万科中心"
    ),
    address: i18next.t(
      "ant-mini-program-demo.API.open-location.open-location.NoXueyuanRoad",
      "学院路77号"
    ),
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  openLocation() {
    my.openLocation({
      longitude: this.data.longitude,
      latitude: this.data.latitude,
      name: this.data.name,
      address: this.data.address,
    });
  },
});

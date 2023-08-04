import i18next from "i18next";
Page({
  data: {
    show: true,
    items: [
      {
        id: 1,
        value: i18next.t("ant-mini-program-demo.filter.single.Clothes", "衣服"),
        selected: true,
      },
      {
        id: 1,
        value: i18next.t("ant-mini-program-demo.filter.single.Cabinet", "橱柜"),
      },
    ],
  },

  handleCallBack(data) {
    my.alert({
      content: data,
    });
  },
  toggleFilter() {
    this.setData({
      show: !this.data.show,
    });
  },
});

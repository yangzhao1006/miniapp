import i18next from "i18next";
Page({
  data: {
    show: true,
    items: [
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.Clothes",
          "衣服"
        ),
        selected: true,
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.Cabinet",
          "橱柜"
        ),
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.Hanger",
          "衣架"
        ),
      },
      {
        id: 3,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.DigitalProducts",
          "数码产品"
        ),
      },
      {
        id: 4,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.SecurityDoor",
          "防盗门"
        ),
      },
      {
        id: 5,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.Chair",
          "椅子"
        ),
      },
      {
        id: 7,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.Monitor",
          "显示器"
        ),
      },
      {
        id: 6,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.ALatestElectronicProduct",
          "某最新款电子产品"
        ),
      },
      {
        id: 8,
        value: i18next.t(
          "ant-mini-program-demo.filter.alternative.XxxBrandTvGameBase",
          "某某某某某牌电视游戏底座"
        ),
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

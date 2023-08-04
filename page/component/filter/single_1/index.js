import i18next from "i18next";
Page({
  data: {
    show: true,
    items: [
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Clothes",
          "衣服啊"
        ),
        selected: true,
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Cabinet",
          "橱柜"
        ),
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Clothes.3",
          "衣服"
        ),
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Cabinet",
          "橱柜"
        ),
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Clothes.3",
          "衣服"
        ),
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Cabinet",
          "橱柜"
        ),
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Clothes.3",
          "衣服"
        ),
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Cabinet",
          "橱柜"
        ),
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_1.Cabinet",
          "橱柜"
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

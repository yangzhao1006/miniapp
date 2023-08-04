import i18next from "i18next";
Page({
  data: {
    show: true,
    items: [
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_2.Clothes",
          "衣服"
        ),
        subtitle: i18next.t(
          "ant-mini-program-demo.filter.single_2.Subtitle",
          "子标题"
        ),
        selected: true,
      },
      {
        id: 1,
        value: i18next.t(
          "ant-mini-program-demo.filter.single_2.Cabinet",
          "橱柜"
        ),
        subtitle: i18next.t(
          "ant-mini-program-demo.filter.single_2.Subtitle",
          "子标题"
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

import i18next from "i18next";
Page({
  data: {
    activeTab: 2,
    tabs: [
      {
        title: i18next.t(
          "ant-mini-program-demo.component.vtabs.vtabs.Option",
          "选项二"
        ),
        anchor: "a",
        number: "6",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.vtabs.vtabs.Option.1",
          "选项"
        ),
        anchor: "b",
        number: "66",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.vtabs.vtabs.NoMoreThanFiveWords",
          "不超过五字"
        ),
        anchor: "c",
        number: "99+",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.vtabs.vtabs.OptionOptionOptionOption",
          "选项四选项四选项四选项四"
        ),
        anchor: "d",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.vtabs.vtabs.Option.2",
          "选项五"
        ),
        anchor: "e",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.vtabs.vtabs.Option.3",
          "选项六"
        ),
        anchor: "f",
      },
    ],
  },

  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  onChange(index) {
    this.setData({
      activeTab: index,
    });
  },
});

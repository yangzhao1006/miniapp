import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  onLoad() {},
  titleGo() {
    my.showToast({
      content: i18next.t(
        "ant-mini-program-demo.component.tag.ClickTheArrowToSet",
        "点击箭头，可设置跳转"
      ),
    });
  },
  titleMore() {
    my.showToast({
      content: i18next.t(
        "ant-mini-program-demo.component.tag.ClickMoreToExpandThe",
        "点击更多，展开气泡菜单"
      ),
    });
  },
  titleClose() {
    my.showToast({
      content: i18next.t(
        "ant-mini-program-demo.component.tag.ClickClose",
        "点击关闭，可设置关闭"
      ),
    });
  },
  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    console.log(e.detail.value);
    this.setData({
      [name]: e.detail.value,
    });
  },
});

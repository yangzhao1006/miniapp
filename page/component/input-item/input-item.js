import i18next from "i18next";
Page({
  data: {
    cardNo: "1234****",
    name: "",
    layerShow1: "",
    layerShow2: i18next.t(
      "ant-mini-program-demo.component.input-item.input-item.VerticalInputBoxLayout",
      "垂直输入框的布局"
    ),
    layerShow3: i18next.t(
      "ant-mini-program-demo.component.input-item.input-item.DisabledInput",
      "disabled 状态的 input"
    ),
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onExtraTap() {
    my.alert({
      content: "extra tapped",
    });
  },
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  onItemFocus() {},
  onItemBlur() {},
  onItemConfirm() {},
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: "",
    });
  },
  onSend() {
    my.alert({
      title: "verify code sent",
    });
  },
});

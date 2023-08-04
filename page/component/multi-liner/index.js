import i18next from "i18next";
Page({
  data: {
    value: i18next.t(
      "ant-mini-program-demo.component.multi-liner.Content",
      "内容"
    ),
    controlled: true,
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onInput(e) {
    this.setData({
      value: e.detail.value,
    });
  },
});

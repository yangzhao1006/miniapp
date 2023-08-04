import i18next from "i18next";
Page({
  data: {
    items: [
      {
        checked: true,
        disabled: false,
        value: "a",
        desc: i18next.t(
          "ant-mini-program-demo.component.radio-ali-ui.SingleClickSelectedByDefault",
          "单选框-默认选中"
        ),
        id: "checkbox1",
      },
      {
        checked: false,
        disabled: false,
        value: "b",
        desc: i18next.t(
          "ant-mini-program-demo.component.radio-ali-ui.SingleClickNotSelectedBy",
          "单选框-默认未选中"
        ),
        id: "checkbox2",
      },
    ],

    items1: [
      {
        checked: true,
        disabled: true,
        value: "c",
        desc: i18next.t(
          "ant-mini-program-demo.component.radio-ali-ui.StandaloneDisabledByDefault",
          "单选框-默认选中disabled"
        ),
        id: "checkbox3",
      },
    ],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onSubmit(e) {
    my.alert({
      content: e.detail.value.lib,
    });
  },
  onReset() {},
  radioChange() {},
});

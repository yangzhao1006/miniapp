import i18next from "i18next";
Page({
  data: {
    array: [
      i18next.t("ant-mini-program-demo.component.picker.picker.China", "中国"),
      i18next.t("ant-mini-program-demo.component.picker.picker.Us", "美国"),
      i18next.t("ant-mini-program-demo.component.picker.picker.Brazil", "巴西"),
      i18next.t("ant-mini-program-demo.component.picker.picker.Japan", "日本"),
    ],
    objectArray: [
      {
        id: 0,
        name: i18next.t(
          "ant-mini-program-demo.component.picker.picker.Us",
          "美国"
        ),
      },

      {
        id: 1,
        name: i18next.t(
          "ant-mini-program-demo.component.picker.picker.China",
          "中国"
        ),
      },

      {
        id: 2,
        name: i18next.t(
          "ant-mini-program-demo.component.picker.picker.Brazil",
          "巴西"
        ),
      },

      {
        id: 3,
        name: i18next.t(
          "ant-mini-program-demo.component.picker.picker.Japan",
          "日本"
        ),
      },
    ],

    arrIndex: 0,
    index: 0,
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  bindPickerChange(e) {
    console.log(
      i18next.t(
        "ant-mini-program-demo.component.picker.picker.PickerSendsAChangeIn",
        "picker发送选择改变，携带值为"
      ),
      e.detail.value
    );
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    console.log(
      i18next.t(
        "ant-mini-program-demo.component.picker.picker.PickerSendsAChangeIn",
        "picker发送选择改变，携带值为"
      ),
      e.detail.value
    );
    this.setData({
      arrIndex: e.detail.value,
    });
  },
});

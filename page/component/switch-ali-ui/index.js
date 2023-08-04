import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  switch1Change(e) {
    console.log(
      i18next.t(
        "ant-mini-program-demo.component.switch-ali-ui.SwitchChanges",
        "switch1 发生 change 事件，携带值为"
      ),
      e.detail.value
    );
  },
});

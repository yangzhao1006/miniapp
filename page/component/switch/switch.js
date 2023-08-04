import i18next from "i18next";
Page({
  data: {
    switch1: true,
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  switch1Change(e) {
    console.log(
      i18next.t(
        "ant-mini-program-demo.component.switch.switch.SwitchChanges",
        "switch1 发生 change 事件，携带值为"
      ),
      e.detail.value
    );
    this.setData({
      switch1: e.detail.value,
    });
  },
  switch2Change(e) {
    console.log(
      i18next.t(
        "ant-mini-program-demo.component.switch.switch.SwitchChanges.1",
        "switch2 发生 change 事件，携带值为"
      ),
      e.detail.value
    );
  },
});

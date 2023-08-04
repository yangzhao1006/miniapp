import i18next from "i18next";Page({
  data: {
    systemInfo: {}, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  getSystemInfo() {
    my.getSystemInfo({
      success: (res) => {
        this.setData({
          systemInfo: res });

      } });

  },
  getSystemInfoSync() {
    this.setData({
      systemInfo: my.getSystemInfoSync() });

  } });
import i18next from "i18next";Page({
  data: {
    hasNetworkType: false, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onLoad() {
    this.onChange = this.onChange.bind(this);
    // my.onNetworkChange(this.onChange);
  },
  onChange(res) {
    console.log('onNetworkChange', res);
    this.setData({
      hasNetworkType: true,
      networkType: res.networkType });

  },
  onUnload() {
    // my.offNetworkChange(this.onChange);
  },
  getNetworkType() {
    my.getNetworkType({
      success: (res) => {
        this.setData({
          hasNetworkType: true,
          networkType: res.networkType });

      } });

  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: '' });

  } });
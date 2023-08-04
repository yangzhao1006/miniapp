import i18next from "i18next";Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
    expand3rd: false, I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },

  onCardClick(ev) {
    my.alert({
      content: ev.info });

  },
  onActionClick() {
    my.alert({
      content: 'action clicked' });

  },
  onExtraActionClick() {
    my.alert({
      content: 'extra action clicked' });

  },
  toggle() {
    this.setData({
      expand3rd: !this.data.expand3rd });

  } });
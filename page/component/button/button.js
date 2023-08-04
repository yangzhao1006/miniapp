import i18next from "i18next";Page({
  data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  onShareAppMessage() {
    return {
      title: 'view page',
      path: 'page/component/view/view' };

  },
  onSubmit() {
    my.alert({ title: 'You click submit' });
  },
  onReset() {
    my.alert({ title: 'You click reset' });
  } });
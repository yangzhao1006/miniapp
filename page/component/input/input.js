import i18next from "i18next";Page({
  data: {
    focus: false,
    inputValue: '', I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },


  bindButtonTap() {
    // blur 事件和这个冲突
    setTimeout(() => {
      this.onFocus();
    }, 100);
  },
  onFocus() {
    this.setData({
      focus: true });

  },
  onBlur() {
    this.setData({
      focus: false });

  },

  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value });

  },

  bindHideKeyboard(e) {
    if (e.detail.value === '123') {
      // 收起键盘
      my.hideKeyboard();
    }
  },

  handleSearch(e) {
    console.log('search', e.detail.value);
    this.setData({
      search: e.detail.value });

  },
  doneSearch() {
    console.log('doneSearch', this.data.search);
    my.hideKeyboard();
  },
  clearSearch() {
    console.log('clear search', this.data.search);
    this.setData({
      search: '' });

  } });
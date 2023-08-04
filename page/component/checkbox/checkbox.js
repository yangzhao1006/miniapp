import i18next from "i18next"; Page({
  data: {
    items: [
      { name: 'angular', value: 'AngularJS' },
      { name: 'react', value: 'React', checked: true },
      { name: 'polymer', value: 'Polymer' },
      { name: 'vue', value: 'Vue.js' },
      { name: 'ember', value: 'Ember.js' },
      { name: 'backbone', value: 'Backbone.js', disabled: true }], I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation
  },


  onSubmit(e) {
    console.log('onSubmit', e);
    my.alert({
      content: i18next.t(
        "ant-mini-program-demo.component.checkbox.checkbox.SelectTheFrameworkYouHaveText",
        "你选择的框架是"
      ) + e.detail.value.libs.join(', ')
    });

  },
  onReset(e) {
    console.log('onReset', e);
  },
  onChange(e) {
    console.log(e);
  }
});
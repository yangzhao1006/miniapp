import i18next from "i18next"; Page({
  data: { I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation },
  tinyToNative() {
    my.call('tinyToNative', {
      param1: 'p1aaa',
      param2: 'p2bbb'
    },
      (result) => {
        console.log(result);
        my.showToast({
          type: 'none',
          content: result.message,
          duration: 3000
        });

      });
  },

  onReady() {
    my.on('nativeToTiny', (res) => {
      my.showToast({
        type: 'none',
        content: JSON.stringify(res),
        duration: 3000,
        success: () => {

        },
        fail: () => {

        },
        complete: () => {

        }
        
      });
    })
  }
});
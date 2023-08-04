import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  showLoading() {
    my.showLoading({
      content: i18next.t(
        "ant-mini-program-demo.API.loading.loading.Loading",
        "加载中..."
      ),
      delay: "1000",
    });

    setTimeout(() => {
      my.hideLoading();
    }, 5000);
  },
});

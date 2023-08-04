import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  setNavigationBar(e) {
    var title = e.detail.value.title;
    var backgroundColor = e.detail.value.backgroundColor;
    var borderBottomColor = e.detail.value.borderBottomColor;
    var image = e.detail.value.image;
    console.log(title);
    my.setNavigationBar({
      title,
      backgroundColor,
      borderBottomColor,
      image,
    });
  },
  resetNavigationBar() {
    my.setNavigationBar({
      reset: true,
      title: i18next.t(
        "ant-mini-program-demo.API.set-navigation-bar.set-navigation-bar.ResetTheNavigationBarStyle",
        "重置导航栏样式"
      ),
    });
  },
});

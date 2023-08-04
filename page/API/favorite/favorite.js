import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  onLoad() {},

  // 检查是否收藏
  isCollected() {
    if (my.canIUse("isCollected")) {
      my.isFaisCollectedvorite({
        success: (res) => {
          my.showToast({
            title: i18next.t(
              "ant-mini-program-demo.API.favorite.favorite.QueryResults",
              "查询结果"
            ),
            content: JSON.stringify(res),
          });
        },
        fail: (error) => {
          my.showToast({ content: "fail" + JSON.stringify(error) });
        },
      });
    } else {
      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.favorite.favorite.TheVersionIsTooLow",
          "版本过低"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.favorite.favorite.MyIscollectedClient",
          "my.isCollected() 客户端10.1.65开始支持"
        ),
      });
    }
  },
});

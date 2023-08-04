import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  onShareAppMessage() {
    return {
      title: i18next.t(
        "ant-mini-program-demo.API.share.share.ShareAndViewComponents",
        "分享 View 组件"
      ),
      desc: i18next.t(
        "ant-mini-program-demo.API.share.share.ViewComponentsAreCommon",
        "View 组件很通用"
      ),
      path: "page/component/view/view",
    };
  },
});

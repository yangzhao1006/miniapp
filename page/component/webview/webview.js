import i18next from "i18next";
Page({
  data: {},
  onShareAppMessage(options) {
    my.alert({ content: JSON.stringify(options.webViewUrl) });
    return {
      title: i18next.t(
        "ant-mini-program-demo.component.webview.webview.ShareWebViewComponents",
        "分享 web-View 组件"
      ),
      desc: i18next.t(
        "ant-mini-program-demo.component.webview.webview.ViewComponentsAreCommon",
        "View 组件很通用"
      ),
      path: "page/component/component-pages/webview/baidu",
      "web-view": options.webViewUrl,
    };
  },
  onmessage(e) {
    my.alert({
      content:
        i18next.t(
          "ant-mini-program-demo.component.webview.webview.GetData",
          "拿到数据"
        ) + JSON.stringify(e), // alert 框的标题
    });
  },
});

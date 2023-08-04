import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  reportAnalytics() {
    my.reportAnalytics("demo_click", {});
    my.alert({
      content: i18next.t(
        "ant-mini-program-demo.API.report-analytics.report-analytics.DataReportedSuccessfullyGoTo",
        "数据上报成功，请到小程序管理后台-数据分析中查看"
      ),
    });
  },
});

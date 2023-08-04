import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  comfirm() {
    my.confirm({
      title: i18next.t(
        "ant-mini-program-demo.API.confirm.confirm.Tips",
        "温馨提示"
      ),
      content: i18next.t(
        "ant-mini-program-demo.API.confirm.confirm.DoYouWantToQuery",
        "您是否想查询快递单号：\n1234567890"
      ),
      confirmButtonText: i18next.t(
        "ant-mini-program-demo.API.confirm.confirm.QueryNow",
        "马上查询"
      ),
      cancelButtonText: i18next.t(
        "ant-mini-program-demo.API.confirm.confirm.NotRequired",
        "暂不需要"
      ),
      success: (result) => {
        my.alert({
          title: `${result.confirm}`,
        });
      },
    });
  },
});

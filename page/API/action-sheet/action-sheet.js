import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  showActionSheet() {
    my.showActionSheet({
      title: i18next.t(
        "ant-mini-program-demo.API.action-sheet.action-sheet.AlipayActionsheet",
        "支付宝-ActionSheet"
      ),
      items: [
        i18next.t(
          "ant-mini-program-demo.API.action-sheet.action-sheet.Menu",
          "菜单一"
        ),
        i18next.t(
          "ant-mini-program-demo.API.action-sheet.action-sheet.Menu.1",
          "菜单二"
        ),
        i18next.t(
          "ant-mini-program-demo.API.action-sheet.action-sheet.Menu.2",
          "菜单三"
        ),
      ],
      cancelButtonText: i18next.t(
        "ant-mini-program-demo.API.action-sheet.action-sheet.Cancel",
        "取消好了"
      ),
      success: (res) => {
        const btn =
          res.index === -1
            ? i18next.t(
                "ant-mini-program-demo.API.action-sheet.action-sheet.Cancel.1",
                "取消"
              )
            : i18next.t(
                "ant-mini-program-demo.API.action-sheet.action-sheet.No",
                "第"
              ) +
              res.index +
              i18next.t(
                "ant-mini-program-demo.API.action-sheet.action-sheet.Number",
                "个"
              );
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.action-sheet.action-sheet.YouClickedTheBtnButton",
            "你点了{{btn}}按钮",
            { btn: btn }
          ),
        });
      },
    });
  },
});

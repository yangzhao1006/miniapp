import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  showToastSuccess() {
    my.showToast({
      type: "success",
      content: i18next.t(
        "ant-mini-program-demo.API.toast.toast.TheOperationIsSuccessful",
        "操作成功"
      ),
      duration: 3000,
      success: () => {
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.toast.toast.ToastDisappeared",
            "toast 消失了"
          ),
        });
      },
    });
  },
  showToastFail() {
    my.showToast({
      type: "fail",
      content: i18next.t(
        "ant-mini-program-demo.API.toast.toast.TheOperationFailed",
        "操作失败"
      ),
      duration: 3000,
      success: () => {
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.toast.toast.ToastDisappeared",
            "toast 消失了"
          ),
        });
      },
    });
  },
  showToastException() {
    my.showToast({
      type: "exception",
      content: i18next.t(
        "ant-mini-program-demo.API.toast.toast.NetworkException",
        "网络异常"
      ),
      duration: 3000,
      success: () => {
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.toast.toast.ToastDisappeared",
            "toast 消失了"
          ),
        });
      },
    });
  },
  showToastNone() {
    my.showToast({
      type: "none",
      content: i18next.t(
        "ant-mini-program-demo.API.toast.toast.Reminder",
        "提醒"
      ),
      duration: 3000,
      success: () => {
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.toast.toast.ToastDisappeared",
            "toast 消失了"
          ),
        });
      },
    });
  },
  hideToast() {
    my.hideToast();
  },
});

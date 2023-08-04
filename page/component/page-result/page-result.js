import i18next from "i18next";
Page({
  data: {
    components: [
      {
        name: "network",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.Network",
          "网络"
        ),
        path: "./network/index",
      },

      {
        name: "local-network",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.LocalNetwork",
          "局部网络"
        ),
        path: "./local-network/index",
      },

      {
        name: "busy",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.BusyService",
          "服务繁忙"
        ),
        path: "./busy/index",
      },

      {
        name: "local-busy",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.BusyLocalServices",
          "局部服务繁忙"
        ),
        path: "./local-busy/index",
      },

      {
        name: "error",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.SystemError",
          "系统错误"
        ),
        path: "./error/index",
      },

      {
        name: "local-error",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.LocalSystemError",
          "局部系统错误"
        ),
        path: "./local-error/index",
      },

      {
        name: "logoff",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.UserCanceled",
          "用户已注销"
        ),
        path: "./log-off/index",
      },

      {
        name: "local-logoff",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.SomeUsersHaveBeenCanceled",
          "局部用户已注销"
        ),
        path: "./local-logoff/index",
      },

      {
        name: "empty",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.ThePageIsEmpty",
          "页面空状态"
        ),
        path: "./empty/index",
      },

      {
        name: "local-empty",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.LocalNullStatus",
          "局部空状态"
        ),
        path: "./local-empty/index",
      },

      {
        name: "payment",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.PaymentFailed",
          "付款失败"
        ),
        path: "./payment/index",
      },

      {
        name: "local-payment",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.PartialPaymentFailed",
          "局部付款失败"
        ),
        path: "./local-payment/index",
      },

      {
        name: "redpacket",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.RedEnvelopeAirspace",
          "红包领空"
        ),
        path: "./redpacket/index",
      },

      {
        name: "local-redpacket",
        nameZN: i18next.t(
          "ant-mini-program-demo.component.page-result.page-result.LocalRedEnvelopeAirspace",
          "局部红包领空"
        ),
        path: "./local-redpacket/index",
      },
    ],
  },

  openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url,
    });
  },
});

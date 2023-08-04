import i18next from "i18next";
const cfg = {
  c1: {
    related: false,
    agreeBtn: {
      title: i18next.t(
        "ant-mini-program-demo.component.terms.AgreeToTheAgreementAnd",
        "同意协议并开通"
      ),
    },

    cancelBtn: {
      title: i18next.t(
        "ant-mini-program-demo.component.terms.DoNotActivateOnlyPay",
        "暂不开通，仅手动缴费"
      ),
    },

    hasDesc: false,
  },

  c2: {
    related: false,
    agreeBtn: {
      title: i18next.t(
        "ant-mini-program-demo.component.terms.AgreeToTheAgreementAnd",
        "同意协议并开通"
      ),
    },

    hasDesc: true,
  },

  c3: {
    related: true,
    agreeBtn: {
      checked: true,
      title: i18next.t("ant-mini-program-demo.component.terms.Submit", "提交"),
    },
  },

  c4: {
    related: true,
    agreeBtn: {
      title: i18next.t("ant-mini-program-demo.component.terms.Submit", "提交"),
    },
  },

  c5: {
    related: false,
    agreeBtn: {
      title: i18next.t(
        "ant-mini-program-demo.component.terms.AgreeToTheAgreementAnd.1",
        "同意协议并提交"
      ),
    },
  },

  c6: {
    related: true,
    fixed: true,
    agreeBtn: {
      checked: true,
      title: i18next.t("ant-mini-program-demo.component.terms.Submit", "提交"),
    },
  },
};

Page({
  data: cfg,
  onLoad() {},
  onSelect(e) {
    const selectedData = e.currentTarget.dataset.name || "";
    selectedData &&
      my.alert({
        title: "Terms Btns",
        content: selectedData,
      });
  },
});

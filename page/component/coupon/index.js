import i18next from "i18next";
Page({
  data: {
    thumb:
      "https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ",
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onCouponClick(e) {
    if (e.currentTarget.dataset.used) {
      return false;
    } else {
      my.alert({
        content: i18next.t(
          "ant-mini-program-demo.component.coupon.AvailableTicketsTicketClickEvents",
          "可用票券，票券点击事件"
        ),
      });
    }
  },
  onButtonTap() {
    my.alert({
      content: i18next.t(
        "ant-mini-program-demo.component.coupon.CapsuleButtonClickEvent",
        "胶囊按钮点击事件"
      ),
    });
  },
});

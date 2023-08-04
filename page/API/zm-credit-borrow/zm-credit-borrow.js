import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  zmCreditBorrow() {
    const vNow = new Date();
    let sNow = "";
    sNow += String(vNow.getFullYear());
    sNow += String(vNow.getMonth() + 1);
    sNow += String(vNow.getDate());
    sNow += String(vNow.getHours());
    sNow += String(vNow.getMinutes());
    sNow += String(vNow.getSeconds());
    sNow += String(vNow.getMilliseconds());
    my.zmCreditBorrow({
      out_order_no: sNow,
      product_code: "w1010100000000002858",
      credit_biz: "ZMRT171102175151",
      invoke_type: "TINYAPP",
      goods_name: encodeURIComponent(
        i18next.t(
          "ant-mini-program-demo.API.zm-credit-borrow.zm-credit-borrow.BeadedToyRental",
          "串珠玩具租借"
        )
      ),
      rent_unit: "DAY_YUAN",
      rent_amount: "0.01",
      deposit_amount: "1.00",
      deposit_state: "Y",
      invoke_state:
        '{"user_name":"' +
        encodeURIComponent(
          i18next.t(
            "ant-mini-program-demo.API.zm-credit-borrow.zm-credit-borrow.AngelWingsIi",
            "天使之翼II"
          )
        ) +
        '"}',
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        });
      },
    });
  },
});

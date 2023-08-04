import i18next from "i18next";
const banks = [
  i18next.t(
    "ant-mini-program-demo.component.picker-item.ECommerceBank",
    "网商银行"
  ),
  i18next.t(
    "ant-mini-program-demo.component.picker-item.ChinaConstructionBank",
    "建设银行"
  ),
  i18next.t("ant-mini-program-demo.component.picker-item.Icbc", "工商银行"),
  i18next.t(
    "ant-mini-program-demo.component.picker-item.ShanghaiPudongDevelopmentBank",
    "浦发银行"
  ),
];

Page({
  data: {
    bank: "",
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onPickerTap() {
    my.showActionSheet({
      title: i18next.t(
        "ant-mini-program-demo.component.picker-item.SelectIssuingBank",
        "选择发卡银行"
      ),
      items: banks,
      success: (res) => {
        this.setData({
          bank: banks[res.index],
        });
      },
    });
  },
});

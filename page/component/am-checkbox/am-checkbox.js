import i18next from "i18next";
Page({
  data: {
    items: [
      {
        value: "a",
        title: i18next.t(
          "ant-mini-program-demo.component.am-checkbox.am-checkbox.CheckBoxNotSelectedBy",
          "复选框-默认未选中"
        ),
        id: "checkbox1",
      },
      {
        checked: true,
        value: "b",
        title: i18next.t(
          "ant-mini-program-demo.component.am-checkbox.am-checkbox.CheckBoxSelectedByDefault",
          "复选框-默认选中"
        ),
        id: "checkbox2",
      },
      {
        checked: true,
        disabled: true,
        value: "c",
        title: i18next.t(
          "ant-mini-program-demo.component.am-checkbox.am-checkbox.CheckBoxDisabledByDefault",
          "复选框-默认选中disabled"
        ),
        id: "checkbox3",
      },
    ],

    items1: [
      {
        ctrlChecked: false,
        disabled: false,
        value: "d",
        title: i18next.t(
          "ant-mini-program-demo.component.am-checkbox.am-checkbox.CheckBoxNotSelectedBy",
          "复选框-默认未选中"
        ),
        id: "checkbox4",
      },
      {
        ctrlChecked: true,
        disabled: true,
        value: "e",
        title: i18next.t(
          "ant-mini-program-demo.component.am-checkbox.am-checkbox.CheckBoxDisabledByDefault.1",
          "复选框-默认未选中disabled"
        ),
        id: "checkbox5",
      },
      {
        ctrlChecked: true,
        value: "f",
        title: i18next.t(
          "ant-mini-program-demo.component.am-checkbox.am-checkbox.CheckBoxSelectedByDefault",
          "复选框-默认选中"
        ),
        id: "checkbox6",
      },
    ],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onChange(e) {
    const { id } = e.currentTarget.dataset;
    const { value } = e.detail;
    const { items1 } = this.data;
    const { length } = items1;
    for (let index = 0; index < length; index += 1) {
      if (items1[index].id === id) {
        this.setData({
          [`items1[${index}].ctrlChecked`]: value,
        });

        break;
      }
    }
  },
  // 全选
  checkedON() {
    this.checkedAll(true);
  },
  // 全不选
  checkedOFF() {
    this.checkedAll(false);
  },
  checkedAll(status) {
    const items1 = this.data.items1.map((element) => ({
      ...element,
      ctrlChecked: status,
    }));

    this.setData({
      items1,
    });
  },
});

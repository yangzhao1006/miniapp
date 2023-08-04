import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  openOne() {
    my.optionsSelect({
      title: i18next.t(
        "ant-mini-program-demo.API.options-select.options-select.RepaymentDateSelection",
        "还款日选择"
      ),
      optionsOne: [
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.EveryMonday",
          "每周一"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.EveryTuesday",
          "每周二"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.EveryWednesday",
          "每周三"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.EveryThursday",
          "每周四"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.EveryFriday",
          "每周五"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.EverySaturday",
          "每周六"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.EverySunday",
          "每周日"
        ),
      ],
      selectedOneIndex: 2,
      success(res) {
        my.alert({
          content: JSON.stringify(res, null, 2),
        });
      },
    });
  },
  openTwo() {
    my.optionsSelect({
      title: i18next.t(
        "ant-mini-program-demo.API.options-select.options-select.DateOfBirth",
        "出生年月选择"
      ),
      optionsOne: [
        "2014年",
        "2013年",
        "2012年",
        "2011年",
        "2010年",
        "2009年",
        "2008年",
      ],
      optionsTwo: [
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.January",
          "一月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.February",
          "二月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.March",
          "三月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.April",
          "四月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.May",
          "五月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.June",
          "六月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.July",
          "七月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.August",
          "八月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.September",
          "九月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.October",
          "十月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.November",
          "十一月"
        ),
        i18next.t(
          "ant-mini-program-demo.API.options-select.options-select.December",
          "十二月"
        ),
      ],
      selectedOneIndex: 3,
      selectedTwoIndex: 5,
      success(res) {
        my.alert({
          content: JSON.stringify(res, null, 2),
        });
      },
    });
  },
});

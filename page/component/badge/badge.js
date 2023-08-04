import i18next from "i18next";
Page({
  data: {
    items: [
      {
        dot: true,
        text: "",
        isWrap: true,
        intro: "Dot Badge",
      },

      {
        dot: false,
        text: 1,
        isWrap: true,
        intro: "Text Badge",
      },

      {
        dot: false,
        text: 99,
        isWrap: false,
        intro: i18next.t(
          "ant-mini-program-demo.component.badge.badge.Number",
          "数字"
        ),
      },

      {
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: i18next.t(
          "ant-mini-program-demo.component.badge.badge.TheNumberExceedsOverflowcount",
          "数字超过overflowCount"
        ),
      },

      {
        dot: false,
        text: "new",
        isWrap: false,
        intro: i18next.t(
          "ant-mini-program-demo.component.badge.badge.Text",
          "文字"
        ),
      },

      {
        dot: false,
        text: "22222222222222",
        isWrap: false,
        intro: i18next.t(
          "ant-mini-program-demo.component.badge.badge.Arrow",
          "箭头中"
        ),
        withArrow: true,
        direction: "middle",
      },

      {
        dot: false,
        text: "left arrow",
        isWrap: false,
        intro: i18next.t(
          "ant-mini-program-demo.component.badge.badge.ArrowLeft",
          "箭头左"
        ),
        withArrow: true,
        direction: "left",
      },

      {
        dot: false,
        text: "right arrow",
        isWrap: false,
        intro: i18next.t(
          "ant-mini-program-demo.component.badge.badge.ArrowRight",
          "箭头右"
        ),
        withArrow: true,
        direction: "right",
      },
    ],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
});

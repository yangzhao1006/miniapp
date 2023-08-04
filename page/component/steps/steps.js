import i18next from "i18next";
Page({
  data: {
    activeIndex: 1,
    failIndex: 0,
    size: 0,
    items: [
      {
        title: i18next.t(
          "ant-mini-program-demo.component.steps.steps.Step",
          "步骤1"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.steps.steps.Step.1",
          "步骤2"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.steps.steps.Step.3",
          "步骤3"
        ),
      },
    ],

    items2: [
      {
        title: i18next.t(
          "ant-mini-program-demo.component.steps.steps.Step",
          "步骤1"
        ),
        description: i18next.t(
          "ant-mini-program-demo.component.steps.steps.ThisIsTheDescriptionDocument",
          "这是步骤1的描述文档，文字足够多的时候会换行，设置了成功的icon"
        ),
        activeIcon: "https://i.alipayobjects.com/common/favicon/favicon.ico",
        size: 20,
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.steps.steps.StepIfTheTitleIs",
          "步骤2 如果标题足够长的话也会换行的"
        ),
        description: i18next.t(
          "ant-mini-program-demo.component.steps.steps.ThisIsStepAndThe",
          "这是步骤2，同时设置了两种状态的icon"
        ),
        icon: "https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*lVojToO-qZIAAAAAAAAAAABjAQAAAQ/original",
        activeIcon: "https://i.alipayobjects.com/common/favicon/favicon.ico",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.steps.steps.Step.3",
          "步骤3"
        ),
        description: i18next.t(
          "ant-mini-program-demo.component.steps.steps.ThisIsStep",
          "这是步骤3"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.component.steps.steps.Step.4",
          "步骤4"
        ),
        description: i18next.t(
          "ant-mini-program-demo.component.steps.steps.NoMoreThanSixWords",
          "不超过六个字"
        ),
      },
    ],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  nextStep() {
    this.setData({
      activeIndex: this.data.activeIndex + 1,
    });
  },
  preStep() {
    this.setData({
      activeIndex: this.data.activeIndex - 1,
    });
  },
  setFailIndex() {
    this.setData({
      failIndex: 3,
    });
  },
  cancelFailIndex() {
    this.setData({
      failIndex: 0,
    });
  },
  setIconSizeAdd() {
    this.setData({
      size:
        this.data.size < 30 && this.data.size > 14 ? this.data.size + 1 : 15,
    });
  },
  setIconSizeReduce() {
    this.setData({
      size: this.data.size > 15 ? this.data.size - 1 : 15,
    });
  },
});

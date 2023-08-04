import i18next from "i18next";
Page({
  data: {
    list1: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.2.TitleText", "标题文字"),
        desc: i18next.t(
          "ant-mini-program-demo.grid.2.AMaximumOfOneLine",
          "描述文字最多一行描述文字最多一行描述文字最多一行描述文字最多一行"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.2.TitleTextTitleTextTitle",
          "标题文字标题文字标题文字标题文字"
        ),
        desc: i18next.t("ant-mini-program-demo.grid.2.Description", "描述文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.2.TitleTextTitleTextTitle",
          "标题文字标题文字标题文字标题文字"
        ),
        desc: i18next.t(
          "ant-mini-program-demo.grid.2.AMaximumOfOneLine.1",
          "描述文字最多一行描述文字最多一行描述文字最多一行描述文字最多一行描述文字最多一行"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.2.TitleText", "标题文字"),
        desc: i18next.t(
          "ant-mini-program-demo.grid.2.AMaximumOfOneLine.2",
          "描述文字最多一行"
        ),
      },
    ],

    list2: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.2.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.2.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.2.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.2.TitleTextTitleTextTitle.1",
          "标题文字标题文字标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.2.TitleTextTitleTextTitle",
          "标题文字标题文字标题文字标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.2.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.2.TitleTextTitleTextTitle.2",
          "标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字"
        ),
      },
    ],
  },

  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
  },
});

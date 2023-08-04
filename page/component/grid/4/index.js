import i18next from "i18next";
Page({
  data: {
    list4: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleTextTitleTextTitle",
          "标题文字标题文字标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleTextTitleText",
          "标题文字标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.4.StandardWord", "标字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.4.Word", "字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.4.TitleText", "标题文字字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.1",
          "标题文字文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },
    ],

    list42: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleText.10",
          "标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.4.TitleTextTitleText.1",
          "标题文字标题文"
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

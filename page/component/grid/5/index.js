import i18next from "i18next";
Page({
  data: {
    list5: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },
    ],

    list55: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.5.TitleText.1",
          "6标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.5.TitleText", "标题文字"),
      },
    ],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
  },
});

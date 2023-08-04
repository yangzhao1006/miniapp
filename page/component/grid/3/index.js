import i18next from "i18next";
Page({
  data: {
    list1: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.3.TitleTextTitleTextTitle",
          "标题文字标题文字标题文字标题文字标题文字标题文字标题文字"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.StandardWord", "标字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
      },
    ],

    list3: [
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t(
          "ant-mini-program-demo.grid.3.TitleTextTitleTextTitle.1",
          "标题文字标题文字标题文字标题文字标题文字标题文字"
        ),
        desc: i18next.t("ant-mini-program-demo.grid.3.Description", "描述信息"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
        desc: i18next.t(
          "ant-mini-program-demo.grid.3.DescriptionDescriptionDescriptionDescriptionDescription",
          "描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
        ),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
        desc: "",
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
        desc: i18next.t("ant-mini-program-demo.grid.3.Description", "描述信息"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
        desc: i18next.t("ant-mini-program-demo.grid.3.Description", "描述信息"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
        desc: i18next.t("ant-mini-program-demo.grid.3.Description", "描述信息"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
        desc: i18next.t("ant-mini-program-demo.grid.3.Description", "描述信息"),
      },

      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png",
        text: i18next.t("ant-mini-program-demo.grid.3.TitleText", "标题文字"),
        desc: i18next.t("ant-mini-program-demo.grid.3.Description", "描述信息"),
      },
    ],
  },

  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
  },
});

import i18next from "i18next";
const thumb =
  "https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ";
Page({
  data: {
    title: i18next.t(
      "ant-mini-program-demo.component.list-item.SingleRowList",
      "单行列表1"
    ),
    extra: i18next.t(
      "ant-mini-program-demo.component.list-item.Details",
      "详细信息"
    ),
    arrow: true,
    upperSubtitle: i18next.t(
      "ant-mini-program-demo.component.list-item.Subtitle.2",
      "上副标题"
    ),
    lowerSubtitle: "",
    thumb,
    borderRadius: false,
    useThumb: true,
    thumbSize: 40,
    primarySlotTypes: [
      i18next.t(
        "ant-mini-program-demo.component.list-item.NoContent",
        "无内容"
      ),
      i18next.t("ant-mini-program-demo.component.list-item.Tag", "标签"),
      i18next.t(
        "ant-mini-program-demo.component.list-item.QuestionMarkIcon",
        "问号图标"
      ),
    ],
    supSlotTypes: [
      i18next.t(
        "ant-mini-program-demo.component.list-item.NoContent",
        "无内容"
      ),
      i18next.t("ant-mini-program-demo.component.list-item.Tag", "标签"),
      i18next.t(
        "ant-mini-program-demo.component.list-item.QuestionMarkIcon",
        "问号图标"
      ),
      i18next.t("ant-mini-program-demo.component.list-item.TickIcon", "勾图标"),
      i18next.t(
        "ant-mini-program-demo.component.list-item.TextContent.3",
        "文字内容"
      ),
    ],
    secSlotTypes: [
      i18next.t(
        "ant-mini-program-demo.component.list-item.NoContent",
        "无内容"
      ),
      i18next.t(
        "ant-mini-program-demo.component.list-item.TextContent.3",
        "文字内容"
      ),
      i18next.t("ant-mini-program-demo.component.list-item.Tag", "标签"),
      i18next.t(
        "ant-mini-program-demo.component.list-item.QuestionMarkIcon",
        "问号图标"
      ),
      i18next.t("ant-mini-program-demo.component.list-item.TickIcon", "勾图标"),
      i18next.t("ant-mini-program-demo.component.list-item.Switch", "开关"),
      i18next.t(
        "ant-mini-program-demo.component.list-item.CapsuleButton",
        "胶囊按钮"
      ),

      "list-secondary",
    ],

    supSlotIndex: 0,
    secSlotIndex: 0,
    titleSlotIndex: 0,
    upperSlotIndex: 0,
    lowerSlotIndex: 0,
    titleTagText: i18next.t(
      "ant-mini-program-demo.component.list-item.Tag",
      "标签"
    ),
    upperTagText: i18next.t(
      "ant-mini-program-demo.component.list-item.Tag",
      "标签"
    ),
    lowerTagText: i18next.t(
      "ant-mini-program-demo.component.list-item.Tag",
      "标签"
    ),
    supTagText: i18next.t(
      "ant-mini-program-demo.component.list-item.Tag",
      "标签"
    ),
    supText: i18next.t(
      "ant-mini-program-demo.component.list-item.TextContent.3",
      "文字内容"
    ),
    secTagText: i18next.t(
      "ant-mini-program-demo.component.list-item.Tag",
      "标签"
    ),
    secText: i18next.t(
      "ant-mini-program-demo.component.list-item.Details",
      "详细信息"
    ),
    titleIconSize: 17,
    upperIconSize: 17,
    lowerIconSize: 17,
    supIconSize: 17,
    secIconSize: 17,
    titlePositions: ["top", "middle", "bottom"],
    titlePosIndex: 0,
    secondary: {
      title: i18next.t(
        "ant-mini-program-demo.component.list-item.SecondaryInformation",
        "次要信息"
      ),
      subtitle: i18next.t(
        "ant-mini-program-demo.component.list-item.SecondaryAuxiliaryInformation",
        "次要辅助信息"
      ),
      thumb,
      useThumb: false,
      thumbSize: undefined,
    },
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    if (name) {
      this.setData({
        [name]: e.detail.value,
      });
    }
  },
  setSecInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    if (name) {
      this.setData({
        secondary: {
          ...this.data.secondary,
          [name]: e.detail.value,
        },
      });
    }
  },
});

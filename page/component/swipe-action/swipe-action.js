import i18next from "i18next";
Page({
  data: {
    swipeIndex: null,
    list: [
      {
        right: [
          {
            type: "delete",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.Delete",
              "删除"
            ),
            fColor: "black",
          },
        ],
        content: i18next.t(
          "ant-mini-program-demo.component.swipe-action.swipe-action.ChangeTheTextColor",
          "更换文字颜色"
        ),
      },
      {
        right: [
          {
            type: "edit",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.CancelFavorites",
              "取消收藏"
            ),
            fColor: "rgba(0,0,0,.5)",
          },
          {
            type: "delete",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.Delete",
              "删除"
            ),
            fColor: "yellow",
          },
          {
            type: "other",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.AddOne",
              "新增一个"
            ),
          },
        ],
        content: i18next.t(
          "ant-mini-program-demo.component.swipe-action.swipe-action.ChangeTextColor",
          "改变文字颜色"
        ),
      },
      {
        right: [
          {
            type: "edit",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.CancelFavorites",
              "取消收藏"
            ),
            bgColor: "#333",
          },
          {
            type: "delete",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.Delete",
              "删除"
            ),
          },
        ],
        content: i18next.t(
          "ant-mini-program-demo.component.swipe-action.swipe-action.OneOfTheBackgroundColor",
          "其中一个背景色变化"
        ),
      },
      {
        right: [
          {
            type: "edit",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.CancelFavorites",
              "取消收藏"
            ),
            bgColor: "#ccc",
            fColor: "#f00",
          },
          {
            type: "delete",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.Delete",
              "删除"
            ),
            bgColor: "#0ff",
            fColor: "#333",
          },
        ],
        content: i18next.t(
          "ant-mini-program-demo.component.swipe-action.swipe-action.TheTextAndBackgroundColor",
          "文字和背景色同时改变"
        ),
      },
      {
        right: [
          {
            type: "edit",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.CancelFavoritesCancelFavoritesCancel",
              "取消收藏取消收藏取消"
            ),
          },
          {
            type: "delete",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.DeleteDeleteDeleteDeleteDelete",
              "删除删除删除删除"
            ),
          },
        ],
        content: i18next.t(
          "ant-mini-program-demo.component.swipe-action.swipe-action.DefaultColorStyle",
          "默认颜色样式"
        ),
      },
      {
        right: [
          {
            type: "edit",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.CancelAttention",
              "取消关注"
            ),
          },
          {
            type: "other",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.DoNotDisturb",
              "免打扰"
            ),
          },
          {
            type: "delete",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.Delete",
              "删除"
            ),
          },
        ],
        content: i18next.t(
          "ant-mini-program-demo.component.swipe-action.swipe-action.CardWithThreeOptions",
          "三个选项的卡片"
        ),
      },
      {
        right: [
          {
            type: "edit",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.CancelAttention",
              "取消关注"
            ),
          },
          {
            type: "other",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.DoNotDisturb",
              "免打扰"
            ),
          },
          {
            type: "delete",
            text: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.Delete",
              "删除"
            ),
          },
        ],
        content: i18next.t(
          "ant-mini-program-demo.component.swipe-action.swipe-action.CardsOfThreeOptionsCards",
          "三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片三个选项的卡片"
        ),
      },
    ],
  },

  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: i18next.t(
        "ant-mini-program-demo.component.swipe-action.swipe-action.Tips",
        "温馨提示"
      ),
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: i18next.t(
        "ant-mini-program-demo.component.swipe-action.swipe-action.Ok",
        "确定"
      ),
      cancelButtonText: i18next.t(
        "ant-mini-program-demo.component.swipe-action.swipe-action.Cancel",
        "取消"
      ),
      success: (result) => {
        // const { list } = this.data;
        if (result.confirm) {
          if (type === "delete") {
            // list.splice(this.data.swipeIndex, 1);
            my.showToast({
              content: i18next.t(
                "ant-mini-program-demo.component.swipe-action.swipe-action.ConfirmDeleteData",
                "确认 => 可进行删除数据操作"
              ),
            });
          }
          e.done();
        } else {
          my.showToast({
            content: i18next.t(
              "ant-mini-program-demo.component.swipe-action.swipe-action.CancelTheSlidingDeletionStatus",
              "取消 => 滑动删除状态保持不变"
            ),
          });
        }
      },
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index,
    });
  },
});

import i18next from "i18next";
Page({
  data: {
    array: [
      {
        mode: "scaleToFill",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.Scaletofill",
          "scaleToFill：不保持纵横比缩放图片，使图片完全适应"
        ),
      },
      {
        mode: "aspectFit",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.AspectfitKeepTheAspectRatio",
          "aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来"
        ),
      },
      {
        mode: "aspectFill",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.AspectfillKeepTheAspectRatio",
          "aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来"
        ),
      },
      {
        mode: "widthFix",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.WidthfixTheWidthRemainsUnchanged",
          "widthFix：宽度不变，高度自动变化，保持原图宽高比不变"
        ),
      },
      {
        mode: "top",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.TopDisplaysOnlyTheTop",
          "top：不缩放图片，只显示图片的顶部区域"
        ),
      },
      {
        mode: "bottom",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.BottomDisplaysOnlyTheBottom",
          "bottom：不缩放图片，只显示图片的底部区域"
        ),
      },
      {
        mode: "center",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.CenterDisplaysOnlyTheMiddle",
          "center：不缩放图片，只显示图片的中间区域"
        ),
      },
      {
        mode: "left",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.LeftDisplaysOnlyTheLeft",
          "left：不缩放图片，只显示图片的左边区域"
        ),
      },
      {
        mode: "right",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.RightDisplaysOnlyTheRight",
          "right：不缩放图片，只显示图片的右边边区域"
        ),
      },
      {
        mode: "top left",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.TopLeftDisplaysOnlyThe",
          "top left：不缩放图片，只显示图片的左上边区域"
        ),
      },
      {
        mode: "top right",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.TopRightDisplaysOnlyThe",
          "top right：不缩放图片，只显示图片的右上边区域"
        ),
      },
      {
        mode: "bottom left",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.BottomLeftDisplaysOnlyThe",
          "bottom left：不缩放图片，只显示图片的左下边区域"
        ),
      },
      {
        mode: "bottom right",
        text: i18next.t(
          "ant-mini-program-demo.component.image.image.BottomRightDisplaysOnlyThe",
          "bottom right：不缩放图片，只显示图片的右下边区域"
        ),
      },
    ],

    src: "/image/ant.png",
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  imageError(e) {
    console.log(
      i18next.t(
        "ant-mini-program-demo.component.image.image.ImageErrorEventWithValue",
        "image 发生 error 事件，携带值为"
      ),
      e.detail.errMsg
    );
  },
  onTap(e) {
    console.log(
      i18next.t(
        "ant-mini-program-demo.component.image.image.ImageTapEvent",
        "image 发生 tap 事件"
      ),
      e
    );
  },
  imageLoad(e) {
    console.log(
      i18next.t(
        "ant-mini-program-demo.component.image.image.ImageLoadingSucceeded",
        "image 加载成功"
      ),
      e
    );
  },
});

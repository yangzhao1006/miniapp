import i18next from "i18next";
const position = [
  "top",
  "topRight",
  "rightTop",
  "right",
  "rightBottom",
  "bottomRight",
  "bottom",
  "bottomLeft",
  "leftBottom",
  "left",
  "leftTop",
  "topLeft",
];
Page({
  data: {
    position: position[0],
    show: false,
    showMask: true,
    showIcon: true,
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onShowPopoverTap() {
    this.setData({
      show: !this.data.show,
    });
  },
  onNextPositionTap() {
    let index = position.indexOf(this.data.position);
    index = index >= position.length - 1 ? 0 : index + 1;
    this.setData({
      show: true,
      position: position[index],
    });
  },
  onMaskChangeTap() {
    this.setData({
      showMask: !this.data.showMask,
    });
  },
  onIconChangeTap() {
    this.setData({
      showIcon: !this.data.showIcon,
    });
  },
  onMaskClick() {
    this.setData({
      show: false,
    });
  },
  itemTap1(e) {
    my.alert({
      content: i18next.t(
        "ant-mini-program-demo.component.popover.popover.ClickEcurrenttargetdataset",
        "点击_{{eCurrentTargetDataset}}",
        { eCurrentTargetDataset: e.currentTarget.dataset.direction }
      ),
    });
  },
  itemTap2(e) {
    my.alert({
      content: i18next.t(
        "ant-mini-program-demo.component.popover.popover.ClickEcurrenttargetdataset",
        "点击_{{eCurrentTargetDataset}}",
        { eCurrentTargetDataset: e.currentTarget.dataset.index }
      ),
    });
  },
});

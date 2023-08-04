import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  onLoad() {
    this.callback = (res) => {
      var levelString = i18next.t(
        "ant-mini-program-demo.API.memory-warning.memory-warning.IosDeviceNoLevelInput",
        "iOS 设备, 无 level 传入."
      );
      switch (res.level) {
        case 10:
          levelString = i18next.t(
            "ant-mini-program-demo.API.memory-warning.memory-warning.AndroidDeviceLevelTrimMemory",
            "Android 设备, level = TRIM_MEMORY_RUNNING_LOW"
          );
          break;
        case 15:
          levelString = i18next.t(
            "ant-mini-program-demo.API.memory-warning.memory-warning.AndroidDeviceLevelTrimMemory.1",
            "Android 设备, level = TRIM_MEMORY_RUNNING_CRITICAL"
          );
          break;
      }

      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.memory-warning.memory-warning.InsufficientMemoryAlertReceived",
          "收到内存不足告警"
        ),
        content: levelString,
      });
    };
    this.isApiAvailable = my.canIUse("onMemoryWarning");
  },
  onMemoryWarning() {
    if (this.isApiAvailable) {
      my.onMemoryWarning(this.callback);
    } else {
      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.memory-warning.memory-warning.TheClientVersionIsToo",
          "客户端版本过低"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.memory-warning.memory-warning.MyOnmemorywarningAndMyOffmemorywarning",
          "my.onMemoryWarning() 和 my.offMemoryWarning() 需要 10.1.35 及以上版本"
        ),
      });
    }
  },
  onUnload() {
    if (this.isApiAvailable) {
      my.offMemoryWarning(this.callback);
    }
  },
});

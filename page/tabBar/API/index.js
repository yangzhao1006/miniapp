import i18next from "i18next";
let openAPIList = [
  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.ObtainAuthorizationCode",
      "获取授权码"
    ),
    path: "/page/API/get-auth-code/get-auth-code",
  },
];

if (my.ap) {
  openAPIList = openAPIList.concat([
    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.ObtainUserInformation",
        "获取用户信息"
      ),
      path: "/page/API/get-user-info/get-user-info",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.InitiatePayment",
        "发起支付"
      ),
      path: "/page/API/request-payment/request-payment",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.AlipayCardPackage",
        "支付宝卡包"
      ),
      path: "/page/API/card-pack/card-pack",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.ZhimaCreditLoan",
        "芝麻信用借还"
      ),
      path: "/page/API/zm-credit-borrow/zm-credit-borrow",
    },
  ]);

  if (my.canIUse("isCollected")) {
    openAPIList = openAPIList.concat([
      {
        name: i18next.t("ant-mini-program-demo.tabBar.API.Favorites", "收藏"),
        path: "/page/API/favorite/favorite",
      },
    ]);
  }

  if (my.canIUse("textRiskIdentification")) {
    openAPIList = openAPIList.concat([
      {
        name: i18next.t(
          "ant-mini-program-demo.tabBar.API.TextRiskDetection",
          "文本风险识别"
        ),
        path: "/page/API/text-risk-identification/text-risk-identification",
      },
    ]);
  }
  if (my.canIUse("generateImageFromCode")) {
    openAPIList = openAPIList.concat([
      {
        name: i18next.t(
          "ant-mini-program-demo.tabBar.API.GenerateAQrCode",
          "生成二维码"
        ),
        path: "/page/API/generate-image-from-code/generate-image-from-code",
      },
    ]);
  }
}

let interfaceList = [
  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.WarningBox", "警告框"),
    path: "/page/API/alert/alert",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.ConfirmationBox",
      "确认框"
    ),
    path: "/page/API/confirm/confirm",
  },

  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.WeakPrompt", "弱提示"),
    path: "/page/API/toast/toast",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.LoadingPrompt",
      "加载提示"
    ),
    path: "/page/API/loading/loading",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.OperationMenu",
      "操作菜单"
    ),
    path: "/page/API/action-sheet/action-sheet",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.SettingsPageNavigationBar",
      "设置界面导航栏"
    ),
    path: "/page/API/set-navigation-bar/set-navigation-bar",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.SetOptionmenu",
      "设置optionMenu"
    ),
    path: "/page/API/option-menu/option-menu",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.PageRedirection",
      "页面跳转"
    ),
    path: "/page/API/navigator/navigator",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.PullDownRefresh",
      "下拉刷新"
    ),
    path: "/page/API/pull-down-refresh/pull-down-refresh",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.CreateAnAnimation",
      "创建动画"
    ),
    path: "/page/API/animation/animation",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.CreateAPainting",
      "创建绘画"
    ),
    path: "/page/API/canvas/canvas",
  },

  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.SelectADate", "选择日期"),
    path: "/page/API/date-picker/date-picker",
  },

  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.ScrollPage", "滚动页面"),
    path: "/page/API/page-scroll-to/page-scroll-to",
  },

  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.NodeQuery", "节点查询"),
    path: "/page/API/create-selector-query/create-selector-query",
  },
];

if (my.ap) {
  interfaceList = interfaceList.concat([
    {
      name: i18next.t("ant-mini-program-demo.tabBar.API.Contact", "联系人"),
      path: "/page/API/contact/contact",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.TitleBarLoadingAnimation",
        "标题栏加载动画"
      ),
      path: "/page/API/navigation-bar-loading/navigation-bar-loading",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.SelectACity",
        "选择城市"
      ),
      path: "/page/API/choose-city/choose-city",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.HideKeyboard",
        "隐藏键盘"
      ),
      path: "/page/API/keyboard/keyboard",
    },
  ]);

  if (my.canIUse("multiLevelSelect")) {
    interfaceList = interfaceList.concat([
      {
        name: i18next.t(
          "ant-mini-program-demo.tabBar.API.CascadeSelection",
          "级联选择"
        ),
        path: "/page/API/multi-level-select/multi-level-select",
      },
    ]);
  }

  if (my.canIUse("optionsSelect")) {
    interfaceList = interfaceList.concat([
      {
        name: i18next.t(
          "ant-mini-program-demo.tabBar.API.OptionSelector",
          "选项选择器"
        ),
        path: "/page/API/options-select/options-select",
      },
    ]);
  }

  if (my.canIUse("getTitleColor")) {
    interfaceList = interfaceList.concat([
      {
        name: i18next.t(
          "ant-mini-program-demo.tabBar.API.ObtainTheBackgroundColorOf",
          "获取导航栏背景颜色"
        ),
        path: "/page/API/get-title-color/get-title-color",
      },
    ]);
  }
}

let deviceAPIList = [
  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.ObtainTheNetworkStatusOf",
      "获取手机网络状态"
    ),
    path: "/page/API/get-network-type/get-network-type",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.ObtainMobilePhoneSystemInformation",
      "获取手机系统信息"
    ),
    path: "/page/API/get-system-info/get-system-info",
  },

  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.Vibration", "振动"),
    path: "/page/API/vibrate/vibrate",
  },

  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.Clipboard", "剪贴板"),
    path: "/page/API/clipboard/clipboard",
  },
];

if (my.ap) {
  deviceAPIList = deviceAPIList.concat([
    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.ObtainTheBaseVersionLibrary",
        "获取基础版本库"
      ),
      path: "/page/API/sdk-version/sdk-version",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.ScreenBrightness",
        "屏幕亮度"
      ),
      path: "/page/API/screen/screen",
    },

    {
      name: i18next.t("ant-mini-program-demo.tabBar.API.Shake", "摇一摇"),
      path: "/page/API/watch-shake/watch-shake",
    },

    {
      name: i18next.t("ant-mini-program-demo.tabBar.API.Call", "拨打电话"),
      path: "/page/API/make-phone-call/make-phone-call",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.UserScreenshotEvents",
        "用户截屏事件"
      ),
      path: "/page/API/user-capture-screen/user-capture-screen",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.ObtainTheServerTime",
        "获取服务器时间"
      ),
      path: "/page/API/get-server-time/get-server-time",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.MemoryShortageAlert",
        "内存不足告警"
      ),
      path: "/page/API/memory-warning/memory-warning",
    },
  ]);
}

const networkAPIList = [
  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.InitiateAnHttpRequest",
      "发起HTTP请求"
    ),
    path: "/page/API/request/request",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.UploadObjects",
      "上传文件"
    ),
    path: "/page/API/upload-file/upload-file",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.DownloadObjects",
      "下载文件"
    ),
    path: "/page/API/download-file/download-file",
  },

  {
    name: "Websocket",
    path: "/page/API/websocket/websocket",
  },
];

const mediaAPIList = [
  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.Image", "图片"),
    path: "/page/API/image/image",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.ObtainImageInformation",
      "获取图片信息"
    ),
    path: "/page/API/get-image-info/get-image-info",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.CompressedImage",
      "压缩图片"
    ),
    path: "/page/API/compress-image/compress-image",
  },
];

const locationAPIList = [
  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.ObtainTheCurrentLocation",
      "获取当前位置"
    ),
    path: "/page/API/get-location/get-location",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.UseANativeMapTo",
      "使用原生地图查看位置"
    ),
    path: "/page/API/open-location/open-location",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.OpenTheMapAndSelect",
      "打开地图选择位置"
    ),
    path: "/page/API/choose-location/choose-location",
  },
];

let otherAPIList = [
  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.Cache", "缓存"),
    path: "/page/API/storage/storage",
  },

  {
    name: i18next.t("ant-mini-program-demo.tabBar.API.ScanCode", "扫码 Scan"),
    path: "/page/API/scan-code/scan-code",
  },

  {
    name: i18next.t(
      "ant-mini-program-demo.tabBar.API.CustomSharing",
      "自定义分享"
    ),
    path: "/page/API/share/share",
  },
];

if (my.ap) {
  otherAPIList = otherAPIList.concat([
    {
      name: i18next.t("ant-mini-program-demo.tabBar.API.File", "文件"),
      path: "/page/API/file/file",
    },

    {
      name: i18next.t("ant-mini-program-demo.tabBar.API.Bluetooth", "蓝牙"),
      path: "/page/API/bluetooth/bluetooth",
    },

    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.DataSecurity",
        "数据安全"
      ),
      path: "/page/API/rsa/rsa",
    },

    // {
    //   name: '自定义分析',
    //   path: '/page/API/report-analytics/report-analytics',
    // },
  ]);

  if (my.canIUse("on")) {
    otherAPIList = otherAPIList.concat([
      {
        name: i18next.t(
          "ant-mini-program-demo.tabBar.API.ContainerEvents",
          "容器事件"
        ),
        path: "/page/API/events/events",
      },
    ]);
  }
  otherAPIList = otherAPIList.concat([
    {
      name: i18next.t(
        "ant-mini-program-demo.tabBar.API.CustomApi",
        "自定义API"
      ),
      path: "/page/API/tiny-to-native/tiny-to-native",
    },
  ]);

  // if (my.canIUse('ocr')) {
  //   otherAPIList = otherAPIList.concat([
  //     {
  //       name: 'OCR',
  //       path: '/page/API/ocr/ocr',
  //     },
  //   ]);
  // }
}

const APIList = [
  // {
  //   type: '开放接口',
  //   list: openAPIList,
  // },
  {
    type: i18next.t("ant-mini-program-demo.tabBar.API.Interface", "界面"),
    list: interfaceList,
  },

  {
    type: i18next.t("ant-mini-program-demo.tabBar.API.Device", "设备"),
    list: deviceAPIList,
  },

  {
    type: i18next.t("ant-mini-program-demo.tabBar.API.Network", "网络"),
    list: networkAPIList,
  },

  {
    type: i18next.t("ant-mini-program-demo.tabBar.API.Multimedia", "多媒体"),
    list: mediaAPIList,
  },

  {
    type: i18next.t("ant-mini-program-demo.tabBar.API.Location", "位置"),
    list: locationAPIList,
  },

  {
    type: i18next.t("ant-mini-program-demo.tabBar.API.Others", "其他"),
    list: otherAPIList,
  },
];

Page({
  data: {
    APIList,
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onSearchBarTap() {
    my.navigateTo({
      url: "/page/common/search/search",
    });
  },
  openPage(e) {
    my.navigateTo({
      url: e.target.dataset.url,
    });
  },
});

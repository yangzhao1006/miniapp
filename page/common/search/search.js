import i18next from "i18next";
import debounce from "/util/debounce";

const componentList = [
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.AmountInput",
      "金额输入"
    ),
    thumb: "/image/icon/amount-input.png",
    path: "/page/component/amount-input/amount-input",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.AmountinputInputAmount",
      "amountinput金额输入"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Button",
      "按钮"
    ),
    thumb: "/image/icon/button.png",
    path: "/page/component/button/button",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ButtonButton",
      "button按钮"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Calendar",
      "日历"
    ),
    thumb: "/image/icon/calendar.png",
    path: "/page/component/calendar/calendar",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Calendar.1",
      "calendar日历"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Card", "卡片"),
    thumb: "/image/icon/card.png",
    path: "/page/component/card/card",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.CardCard",
      "card卡片"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.CheckBox",
      "复选框"
    ),
    thumb: "/image/icon/checkbox.png",
    path: "/page/component/checkbox/checkbox",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Checkbox",
      "checkbox复选框"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SingleBead",
      "单选框"
    ),
    thumb: "/image/icon/radio.png",
    path: "/page/component/radio/radio",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.RadioRadioRadio",
      "radio单选框"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.AntCcs",
      "云客服"
    ),
    thumb: "/image/icon/contact-button.png",
    path: "/page/component/contact-button/contact-button",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Contactbutton",
      "contactbutton云客服"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Canvas",
      "画布"
    ),
    thumb: "/image/icon/canvas.png",
    path: "/page/component/canvas/canvas",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Canvas.1",
      "canvas画布"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Filter",
      "筛选"
    ),
    thumb: "/image/icon/filter.png",
    path: "/page/component/filter/filter",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Filter.1",
      "filter筛选"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Footer",
      "页脚"
    ),
    thumb: "/image/icon/footer.png",
    path: "/page/component/footer/footer",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.FooterFooter",
      "footer页脚"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Form", "表单"),
    thumb: "/image/icon/form.png",
    path: "/page/component/form/form",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.FormForm",
      "form表单"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.PalaceLattice",
      "宫格"
    ),
    thumb: "/image/icon/grid.png",
    path: "/page/component/grid/grid",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.GridGrid",
      "grid宫格"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Icon", "图标"),
    thumb: "/image/icon/icon.png",
    path: "/page/component/icon/icon",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Icon.2",
      "icon图标"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Icon", "图标"),
    thumb: "/image/icon/icon.png",
    path: "/page/component/am-icon/am-icon",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Icon.2",
      "icon图标"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Image", "图片"),
    thumb: "/image/icon/image.png",
    path: "/page/component/image/image",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ImageAndImageMedia",
      "image图片媒体"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.TextInput",
      "文本输入"
    ),
    thumb: "/image/icon/input.png",
    path: "/page/component/input-item/input-item",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.InputitemTextInput",
      "inputitem文本输入"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Tag", "标签"),
    thumb: "/image/icon/label.png",
    path: "/page/component/label/label",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Label",
      "label标签"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.JumpLifeNumber",
      "跳转生活号"
    ),
    thumb: "/image/icon/lifestyle.png",
    path: "/page/component/lifestyle/lifestyle",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Lifestyle",
      "lifestyle跳转生活号"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.List", "列表"),
    thumb: "/image/icon/form.png",
    path: "/page/component/list/list",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.List.1",
      "list列表"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Map", "地图"),
    thumb: "/image/icon/map.png",
    path: "/page/component/map/map",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.MapMap",
      "map地图"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ResultPage",
      "结果页"
    ),
    thumb: "/image/icon/message.png",
    path: "/page/component/message/massage",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.MessageResultPage",
      "message结果页"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.DialogBox",
      "对话框"
    ),
    thumb: "/image/icon/modal.png",
    path: "/page/component/modal/modal",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ModalDialogBox",
      "modal对话框"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Navigation",
      "导航"
    ),
    thumb: "/image/icon/navigator.png",
    path: "/page/component/navigator/navigator",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.NavigatorNavigation",
      "navigator导航"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.BulletinBoard",
      "通告栏"
    ),
    thumb: "/image/icon/notice.png",
    path: "/page/component/notice/notice",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.NoticeBulletinBoard",
      "notice通告栏"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Logo", "徽标"),
    thumb: "/image/icon/view.png",
    path: "/page/component/badge/badge",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.BadgeLogo",
      "badge徽标"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ExceptionPage",
      "异常页"
    ),
    thumb: "/image/icon/page-result.png",
    path: "/page/component/page-result/page-result",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.PageresultLocalExceptionPage",
      "pageresult局部异常页面"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Selector",
      "选择器"
    ),
    thumb: "/image/icon/picker.png",
    path: "/page/component/picker/picker",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.PickerPicker",
      "picker选择器"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SelectorView",
      "选择器视图"
    ),
    thumb: "/image/icon/picker-view.png",
    path: "/page/component/picker-view/picker-view",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.PickerviewPickerView",
      "pickerview选择器视图"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Bubbles",
      "气泡"
    ),
    thumb: "/image/icon/popover.png",
    path: "/page/component/popover/popover",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.PopoverBubbles",
      "popover气泡"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.PopUpMenu",
      "弹出菜单"
    ),
    thumb: "/image/icon/popup.png",
    path: "/page/component/popup/popup",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.PopupPopUpMenu",
      "popup弹出菜单"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ProgressBar",
      "进度条"
    ),
    thumb: "/image/icon/progress.png",
    path: "/page/component/progress/progress",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ProgressProgressBar",
      "progress进度条"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SearchBox",
      "搜索框"
    ),
    thumb: "/image/icon/search-bar.png",
    path: "/page/component/search-bar/search-bar",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.SearchbarSearchBox",
      "searchbar搜索框"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SlidingBar",
      "滑动条"
    ),
    thumb: "/image/icon/slider.png",
    path: "/page/component/slider/slider",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.SliderSlidingBar",
      "slider滑动条"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.WalkingDevice",
      "步进器"
    ),
    thumb: "/image/icon/stepper.png",
    path: "/page/component/stepper/stepper",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.StepperWalkingDevice",
      "stepper步进器"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Step",
      "步骤条"
    ),
    thumb: "/image/icon/steps.png",
    path: "/page/component/steps/steps",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Steps",
      "steps步骤条"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SlidingCell",
      "可滑动单元格"
    ),
    thumb: "/image/icon/swipe-action.png",
    path: "/page/component/swipe-action/swipe-action",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.SwipeactionSlidingCellGesture",
      "swipeaction可滑动单元格手势"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Switch",
      "开关"
    ),
    thumb: "/image/icon/switch.png",
    path: "/page/component/switch/switch",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Switch.2",
      "switch开关"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.TopTab",
      "顶部选项卡"
    ),
    thumb: "/image/icon/tabs.png",
    path: "/page/component/tabs/tabs",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Tabs",
      "tabs顶部选项卡"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.MultiLineInputBox",
      "多行输入框"
    ),
    thumb: "/image/icon/textarea.png",
    path: "/page/component/textarea/textarea",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.TextareaMultiLineInputBox",
      "textarea多行输入框"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Guide", "引导"),
    thumb: "/image/icon/tips.png",
    path: "/page/component/tips/tips",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Tips",
      "tips提示引导"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.VerticalTab",
      "纵向选项卡"
    ),
    thumb: "/image/icon/vtabs.png",
    path: "/page/component/vtabs/vtabs",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.VerticalVtabs",
      "vtabs纵向选项卡"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.EmbeddedWebview",
      "内嵌webview"
    ),
    thumb: "/image/icon/webview.png",
    path: "/page/component/webview/webview",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.WebviewEmbeddedWebview",
      "webview内嵌webview"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.BasicView",
      "基础视图"
    ),
    thumb: "/image/icon/view.png",
    path: "/page/component/view/view",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ViewContainer",
      "view视图容器"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SlidingView",
      "滑动视图"
    ),
    thumb: "/image/icon/swiper.png",
    path: "/page/component/swiper/swiper",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.SwiperSlidingViewContainer",
      "swiper滑动视图容器"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ScrollView",
      "滚动视图"
    ),
    thumb: "/image/icon/scroll-view.png",
    path: "/page/component/scroll-view/scroll-view",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Scrollview",
      "scrollview滚动视图"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.InputBox",
      "输入框"
    ),
    thumb: "/image/icon/input.png",
    path: "/page/component/input/input",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.InputInputBoxTextInput",
      "input输入框文本输入"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Text", "文字"),
    thumb: "/image/icon/text.png",
    path: "/page/component/text/text",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.TextText",
      "text文本文字"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Container",
      "容器"
    ),
    thumb: "/image/icon/container.png",
    path: "/page/component/container/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Container.1",
      "container容器"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ModuleTitle",
      "模块标题"
    ),
    thumb: "/image/icon/navigator.png",
    path: "/page/component/title/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.TitleTitle",
      "title标题"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ListElements",
      "列表元素"
    ),
    thumb: "/image/icon/list-item.png",
    path: "/page/component/list-item/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ListItemListElements",
      "list-item列表元素"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Ticket",
      "票券"
    ),
    thumb: "/image/icon/coupon.png",
    path: "/page/component/coupon/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.CouponCoupon",
      "coupon票券优惠券"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Protocol",
      "协议"
    ),
    thumb: "/image/icon/terms.png",
    path: "/page/component/terms/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.TermsAndConditions",
      "terms协议条款"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.FoldingPanel",
      "折叠面板"
    ),
    thumb: "/image/icon/collapse.png",
    path: "/page/component/collapse/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.CollapseFoldingMoreAccordion",
      "collapse折叠更多手风琴"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Tag", "标签"),
    thumb: "/image/icon/tag.png",
    path: "/page/component/tag/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Tag.1",
      "tag标签"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.BackgroundMask",
      "背景蒙层"
    ),
    thumb: "/image/icon/mask.png",
    path: "/page/component/mask/mask",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.MaskBackgroundMask",
      "mask遮罩背景蒙层"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.MaskGuide",
      "遮罩引导"
    ),
    thumb: "/image/icon/guide.png",
    path: "/page/component/guide/guide",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.GuideTheNewGuide",
      "guide遮罩引导新手指引"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Avatar",
      "头像"
    ),
    thumb: "/image/icon/avatar.png",
    path: "/page/component/avatar/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.AvatarUserAvatar",
      "avatar用户头像"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.VerificationCodeInput",
      "验证码输入"
    ),
    thumb: "/image/icon/verifycode.png",
    path: "/page/component/verify-code/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.VerifyCodeVerificationCodeInput",
      "verify-code验证码输入框"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SelectInput",
      "选择输入"
    ),
    thumb: "/image/icon/picker.png",
    path: "/page/component/picker-item/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.PickerItemSelectInput",
      "picker-item选择输入"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.LongPasswordBox",
      "长密码框"
    ),
    thumb: "/image/icon/longpassword.png",
    path: "/page/component/long-password/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.LongPasswordLongPasswordInput",
      "long-password长密码输入框"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.MultiLineInput",
      "多行输入"
    ),
    thumb: "/image/icon/textarea.png",
    path: "/page/component/multi-liner/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.MultiLinerMultiLineInput",
      "multi-liner多行输入textarea"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Button",
      "按钮"
    ),
    thumb: "/image/icon/button.png",
    path: "/page/component/button-ali-ui/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ButtonButton",
      "button按钮"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Switch",
      "开关"
    ),
    thumb: "/image/icon/switch.png",
    path: "/page/component/switch-ali-ui/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Switch.2",
      "switch开关"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SingleChoice",
      "单选"
    ),
    thumb: "/image/icon/radio-aliui.png",
    path: "/page/component/radio-ali-ui/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.RadioRadio",
      "radio单选"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.PaginationCharacter",
      "分页符"
    ),
    thumb: "/image/icon/pagination.png",
    path: "/page/component/pagination/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Pagination",
      "pagination分页符"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.AlphabeticalIndexTable",
      "字母索引表"
    ),
    thumb: "/image/icon/alphabet.png",
    path: "/page/component/alphabet/index",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.AlphabetIndexTable",
      "alphabet字母索引表"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Load", "加载"),
    thumb: "/image/icon/loading.png",
    path: "/page/component/loading/loading",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.LoadingAnimation",
      "loading加载动画"
    ),
  },
];

const apiList = [
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ObtainAuthorizationCode",
      "获取授权码"
    ),
    path: "/page/API/get-auth-code/get-auth-code",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Getauthcode",
      "getauthcode获取授权码"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ObtainAuthorizationInformation",
      "获取授信息"
    ),
    path: "/page/API/get-user-info/get-user-info",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Getuserinfo",
      "getuserinfo获取用户信息"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.InitiatePayment",
      "发起支付"
    ),
    path: "/page/API/request-payment/request-payment",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.RequestPayment",
      "requestpayment发起支付"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.AlipayCardPackage",
      "支付宝卡包"
    ),
    path: "/page/API/card-pack/card-pack",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.CardpackAlipayCardPackage",
      "cardpack支付宝卡包"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ZhimaCreditLoan",
      "芝麻信用借还"
    ),
    path: "/page/API/zm-credit-borrow/zm-credit-borrow",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ZmcreditborrowZhimaCreditLoan",
      "zmcreditborrow芝麻信用借还"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.TextRiskDetection",
      "文本风险识别"
    ),
    path: "/page/API/text-risk-identification/text-risk-identification",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.TextriskidentificationRiskTextRecognition",
      "textriskidentification风险文本识别"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.WarningBox",
      "警告框"
    ),
    path: "/page/API/alert/alert",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.AlertWarningBox",
      "alert警告框"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ConfirmationBox",
      "确认框"
    ),
    path: "/page/API/confirm/confirm",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ConfirmBox",
      "confirm确认框"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.WeakPrompt",
      "弱提示"
    ),
    path: "/page/API/toast/toast",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ToastWeakPrompt",
      "toast弱提示"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.LoadingPrompt",
      "加载提示"
    ),
    path: "/page/API/loading/loading",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.LoadingPrompt.1",
      "loading加载提示"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.OperationMenu",
      "操作菜单"
    ),
    path: "/page/API/action-sheet/action-sheet",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ActionsheetOperationMenu",
      "actionsheet操作菜单"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SettingsPageNavigationBar",
      "设置界面导航栏"
    ),
    path: "/page/API/set-navigation-bar/set-navigation-bar",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Setnavigationbar",
      "setnavigationbar设置界面导航栏"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SetOptionmenu",
      "设置optionMenu"
    ),
    path: "/page/API/option-menu/option-menu",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.OptionmenuSettingsOptionmenu",
      "optionmenu设置optionmenu"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.PageRedirection",
      "页面跳转"
    ),
    path: "/page/API/navigator/navigator",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.NavigatorPageJump",
      "navigator页面跳转"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.PullDownRefresh",
      "下拉刷新"
    ),
    path: "/page/API/pull-down-refresh/pull-down-refresh",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Pulldownrefresh",
      "pulldownrefresh下拉刷新"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.CreateAnAnimation",
      "创建动画"
    ),
    path: "/page/API/animation/animation",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.CreateAnimation",
      "animation创建动画"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.CreateAPainting",
      "创建绘画"
    ),
    path: "/page/API/canvas/canvas",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.CanvasCreateACanvas",
      "canvas创建绘画画布"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SelectADate",
      "选择日期"
    ),
    path: "/page/API/date-picker/date-picker",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.DatepickerSelectDate",
      "datepicker选择日期选择"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ScrollPage",
      "滚动页面"
    ),
    path: "/page/API/page-scroll-to/page-scroll-to",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Pagescrollto",
      "pagescrollto滚动页面"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.NodeQuery",
      "节点查询"
    ),
    path: "/page/API/create-selector-query/create-selector-query",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Createselectorquery",
      "createselectorquery节点查询"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Contact",
      "联系人"
    ),
    path: "/page/API/contact/contact",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Contact.1",
      "contact联系人"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.TitleBarLoadingAnimation",
      "标题栏加载动画"
    ),
    path: "/page/API/navigation-bar-loading/navigation-bar-loading",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.NavigationbarloadingTitleBarLoadingAnimation",
      "navigationbarloading标题栏加载动画"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.SelectACity",
      "选择城市"
    ),
    path: "/page/API/choose-city/choose-city",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ChoosecitySelectCity",
      "choosecity选择城市选择"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.HideKeyboard",
      "隐藏键盘"
    ),
    path: "/page/API/keyboard/keyboard",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.HidekeyboardHiddenKeyboard",
      "hidekeyboard隐藏键盘"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.CascadeSelection",
      "级联选择"
    ),
    path: "/page/API/multi-level-select/multi-level-select",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.MultilevelselectCascadeSelection",
      "multilevelselect级联选择"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.OptionSelection",
      "选项选择"
    ),
    path: "/page/API/options-select/options-select",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.MultilevelselectCascadeSelection",
      "multilevelselect级联选择"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ObtainTheNetworkStatusOf",
      "获取手机网络状态"
    ),
    path: "/page/API/get-network-type/get-network-type",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.GetnetworktypeObtainsTheNetworkStatus",
      "getnetworktype获取手机网络状态"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ObtainMobilePhoneSystemInformation",
      "获取手机系统信息"
    ),
    path: "/page/API/get-system-info/get-system-info",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Getsysteminfo",
      "getsysteminfo获取手机系统信息"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Vibration",
      "振动"
    ),
    path: "/page/API/vibrate/vibrate",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Vibrate",
      "vibrate振动"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Clipboard",
      "剪贴板"
    ),
    path: "/page/API/clipboard/clipboard",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Clipboard.1",
      "clipboard剪贴板"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ObtainTheBasicDatabaseVersion",
      "获取基础库版本"
    ),
    path: "/page/API/sdk-version/sdk-version",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Sdkversion",
      "sdkversion获取基础库版本"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ScreenBrightness",
      "屏幕亮度"
    ),
    path: "/page/API/screen/screen",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ScreenBrightness.1",
      "screen屏幕亮度"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Shake",
      "摇一摇"
    ),
    path: "/page/API/watch-shake/watch-shake",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Watchshake",
      "watchshake摇一摇"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Call",
      "拨打电话"
    ),
    path: "/page/API/make-phone-call/make-phone-call",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.MakephonecallCall",
      "makephonecall拨打电话"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.UserScreenshotEvents",
      "用户截屏事件"
    ),
    path: "/page/API/user-capture-screen/user-capture-screen",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.UsercapturescreenUserScreenshotEvent",
      "usercapturescreen用户截屏事件"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ObtainTheServerTime",
      "获取服务器时间"
    ),
    path: "/page/API/get-server-time/get-server-time",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Getservertime",
      "getservertime获取服务器时间"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.MemoryShortageWarning",
      "内存不足警告"
    ),
    path: "/page/API/memory-warning//memory-warning",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.MemorywarningInsufficientMemory",
      "memorywarning内存不足警告"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.InitiateAnHttpRequest",
      "发起HTTP请求"
    ),
    path: "/page/API/request/request",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.RequestInitiateRequestInitiateHttp",
      "request发起请求发起http请求网络"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.UploadObjects",
      "上传文件"
    ),
    path: "/page/API/upload-file/upload-file",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Uploadfile",
      "uploadfile上传文件网络"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.DownloadObjects",
      "下载文件"
    ),
    path: "/page/API/download-file/download-file",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.DownloadfileDownloadFileNetwork",
      "downloadfile下载文件网络"
    ),
  },
  {
    name: "Websocket",
    path: "/page/API/websocket/websocket",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.WebsocketNetwork",
      "websocket网络"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Image", "图片"),
    path: "/page/API/image/image",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ImageAndPictureMultimedia",
      "image图片多媒体"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ObtainImageInformation",
      "获取图片信息"
    ),
    path: "/page/API/get-image-info/get-image-info",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Getimageinfo",
      "getimageinfo获取图片信息"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.CompressedImage",
      "压缩图片"
    ),
    path: "/page/API/compress-image/compress-image",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.CompressedImages",
      "compressimage压缩图片"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ObtainTheCurrentLocation",
      "获取当前位置"
    ),
    path: "/page/API/get-location/get-location",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Getlocation",
      "getlocation获取当前位置地图"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.UseANativeMapTo",
      "使用原生地图查看位置"
    ),
    path: "/page/API/open-location/open-location",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.OpenlocationUseANativeMap",
      "openlocation使用原生地图查看位置"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.OpenTheMapAndSelect",
      "打开地图选择位置"
    ),
    path: "/page/API/choose-location/choose-location",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ChooselocationOpenTheMapAnd",
      "chooselocation打开地图选择位置"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.Cache", "缓存"),
    path: "/page/API/storage/storage",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.StorageCache",
      "storage缓存"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ScanCode",
      "扫码 Scan"
    ),
    path: "/page/API/scan-code/scan-code",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ScanCodeScan",
      "scan-code扫码"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.CustomSharing",
      "自定义分享"
    ),
    path: "/page/API/share/share",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.ShareCustomShare",
      "share自定义分享"
    ),
  },
  {
    name: i18next.t("ant-mini-program-demo.common.search.search.File", "文件"),
    path: "/page/API/file/file",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.File.1",
      "file文件"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Bluetooth",
      "蓝牙"
    ),
    path: "/page/API/bluetooth/bluetooth",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Bluetooth.1",
      "bluetooth蓝牙"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.DataSecurity",
      "数据安全"
    ),
    path: "/page/API/rsa/rsa",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.RsaDataSecurity",
      "rsa数据安全"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.CustomAnalysis",
      "自定义分析"
    ),
    path: "/page/API/report-analytics/report-analytics",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.Reportanalytics",
      "reportanalytics数据分析"
    ),
  },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.ContainerEvents",
      "容器事件"
    ),
    path: "/page/API/events/events",
    suggestion: i18next.t(
      "ant-mini-program-demo.common.search.search.EventsContainerEvents",
      "events容器事件"
    ),
  },
  { name: "OCR", path: "/page/API/ocr/ocr", suggestion: "ocr" },
  {
    name: i18next.t(
      "ant-mini-program-demo.common.search.search.Favorites",
      "收藏"
    ),
    path: "/page/API/favorite/favorite",
    suggestion: "favorite",
  },
];

Page({
  data: {
    value: "",
    history: my.getStorageSync({ key: "searchHistory" }).data || [],
    hot: [
      { name: "ScrollView", url: "/page/component/scroll-view/scroll-view" },
      {
        name: i18next.t(
          "ant-mini-program-demo.common.search.search.Map",
          "地图"
        ),
        url: "/page/component/map/map",
      },
      { name: "Icon", url: "/page/component/icon/icon" },
      { name: "Card", url: "/page/component/card/card" },
      {
        name: i18next.t(
          "ant-mini-program-demo.common.search.search.ObtainAuthorizationCode",
          "获取授权码"
        ),
        url: "/page/API/get-auth-code/get-auth-code",
      },
      { name: "Popup", url: "/page/component/popup/popup" },
      {
        name: i18next.t(
          "ant-mini-program-demo.common.search.search.InitiateAnHttpRequest",
          "发起HTTP请求"
        ),
        url: "/page/API/request/request",
      },
      {
        name: i18next.t(
          "ant-mini-program-demo.common.search.search.Canvas",
          "画布"
        ),
        url: "/page/component/canvas/canvas",
      },
      {
        name: i18next.t(
          "ant-mini-program-demo.common.search.search.Navigation",
          "导航"
        ),
        url: "/page/API/navigator/navigator",
      },
    ],

    componentSuggestions: [],
    apiSuggestions: [],
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  onLoad() {
    this.setData({
      history: my.getStorageSync({ key: "searchHistory" }).data,
    });

    console.log(my.getStorageSync({ key: "searchHistory" }).data);
    this.onInput = debounce(this.onInput.bind(this), 400);
    my.setNavigationBar({
      borderBottomColor: "#fff",
    });
  },
  clear() {
    my.confirm({
      content: i18next.t(
        "ant-mini-program-demo.common.search.search.AreYouSureYouWant",
        "确定删除相关历史？"
      ),
      success: (res) => {
        if (res.confirm) {
          my.clearStorage();
          this.setData({
            history: [],
          });
        }
      },
    });
  },
  onInput(keyword) {
    this.setData({
      value: keyword,
    });

    const regExp = /[A-Za-z]/;
    if (keyword === "" || (regExp.test(keyword) && keyword.length === 1)) {
      this.setData({
        componentSuggestions: [],
        apiSuggestions: [],
      });

      return;
    }
    const componentSuggestions = [];
    const apiSuggestions = [];
    for (let i = 0; i < componentList.length; i++) {
      if (
        componentList[i].suggestion
          .toLocaleLowerCase()
          .indexOf(keyword.toLocaleLowerCase()) != -1
      ) {
        componentSuggestions.push(componentList[i]);
      }
    }

    for (let i = 0; i < apiList.length; i++) {
      if (
        apiList[i].suggestion
          .toLocaleLowerCase()
          .indexOf(keyword.toLocaleLowerCase()) != -1
      ) {
        apiSuggestions.push(apiList[i]);
      }
    }
    this.setData({ componentSuggestions, apiSuggestions });
  },
  onClear() {
    this.setData({
      value: "",
    });
  },
  onCancel() {
    this.setData({
      componentSuggestions: [],
      apiSuggestions: [],
      value: "",
    });

    my.navigateBack();
  },
  onItemTap({ name }) {
    this.setData({
      value: name,
    });

    this.onInput(name);
  },
  onListItemTap(e) {
    const { name, url } = e.target.dataset;
    this.addToHistory(name);
    console.log(url);
    my.navigateTo({ url: url });
  },
  addToHistory(keyword) {
    const searchHistory =
      my.getStorageSync({ key: "searchHistory" }).data || [];
    let index = -1;

    for (let i = 0; i < searchHistory.length; i++) {
      if (searchHistory[i].name === keyword) {
        index = i;
        break;
      }
    }

    let history = [];

    if (searchHistory.length >= 8) {
      if (index === -1) {
        history = [{ name: keyword }, ...searchHistory.slice(0, 7)];
      } else {
        searchHistory.splice(index, 1).slice(0, 7);
        history = [{ name: keyword }, ...searchHistory];
      }
    } else {
      if (index === -1) {
        history = [{ name: keyword }, ...searchHistory];
      } else {
        searchHistory.splice(index, 1);
        history = [{ name: keyword }, ...searchHistory];
      }
    }

    my.setStorageSync({
      key: "searchHistory",
      data: history,
    });

    this.setData({
      history,
    });
  },
});

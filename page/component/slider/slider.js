import i18next from "i18next";
const pageData = {};

for (let i = 1; i < 5; ++i) {
  (function (index) {
    pageData["slider" + index + "change"] = function (e) {
      console.log(
        "slider" +
          index +
          i18next.t(
            "ant-mini-program-demo.component.slider.slider.TheErrorMessageReturnedBecause",
            "发生change事件，携带值为"
          ),
        e.detail.value
      );
    };
  })(i);
}
Page(pageData);

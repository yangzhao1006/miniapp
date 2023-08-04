import i18next from "i18next";
Page({
  data: {
    textArry: [],
    imgUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/bqeolZyhDKKJwGsgeHtm.jpg",
  },

  onLoad() {
    this.callFn(this.data.imgUrl);
  },
  callFn(url) {
    my.showLoading({
      content: i18next.t(
        "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Loading",
        "加载中..."
      ),
      delay: 100,
    });

    my.ocr({
      ocrType: "ocr_idcard",
      side: "face",
      path: url,
      success: (res) => {
        let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
        let { name, sex, nationality, birth, address, num } = data;
        this.setData({
          imgUrl: url,
          textArry: [
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Name",
                "姓名"
              ),
              message: name,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Gender",
                "性别"
              ),
              message: sex,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Nationality",
                "民族"
              ),
              message: nationality,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Born",
                "出生"
              ),
              message: this.reData(birth),
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Address",
                "地址"
              ),
              message: address,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.IdentityNumber",
                "身份号码"
              ),
              message: num,
            },
          ],
        });

        my.hideLoading();
      },
      fail: (res) => {
        my.hideLoading();

        my.alert({
          title: "fail",
          content: JSON.stringify(res),
        });
      },
    });
  },
  photoSubmit() {
    //点击上传
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.callFn(res.apFilePaths[0]);
      },
    });
  },
  reData(data) {
    return (
      data.substring(0, 4) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Year",
        "年"
      ) +
      data.substring(4, 6) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Month",
        "月"
      ) +
      data.substring(6, 8) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-idcard-face.ocr-idcard-face.Day",
        "日"
      )
    );
  },
  imageLoad(e) {},
  imageError(e) {},
});

import i18next from "i18next";
Page({
  data: {
    textArry: [],
    imgUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/VSYVmTFPyVyNlxYvRGBJ.jpg",
  },

  onLoad() {
    this.callFn(this.data.imgUrl);
  },
  callFn(url) {
    my.showLoading({
      content: i18next.t(
        "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.Loading",
        "加载中..."
      ),
      delay: 100,
    });

    my.ocr({
      ocrType: "ocr_driver_license",
      side: "face",
      path: url,
      success: (res) => {
        let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
        let { num, name, sex, addr, start_date, vehicle_type, end_date } = data;
        this.setData({
          imgUrl: url,
          textArry: [
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.CertificateNo",
                "证号"
              ),
              message: num,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.Name",
                "姓名"
              ),
              message: name,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.Gender",
                "性别"
              ),
              message: sex,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.Address",
                "地址"
              ),
              message: addr,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.QuasiDrivingType",
                "准驾车型"
              ),
              message: vehicle_type,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.StartDate",
                "起始日期"
              ),
              message: this.reData(start_date),
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.EffectiveDate",
                "有效日期"
              ),
              message: end_date,
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
        "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.Year",
        "年"
      ) +
      data.substring(4, 6) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.Month",
        "月"
      ) +
      data.substring(6, 8) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-driver-license.ocr-driver-license.Day",
        "日"
      )
    );
  },
  imageLoad(e) {},
  imageError(e) {},
});
